from django.test import TestCase,Client
from django.db.models import Max
from allauth.account.models  import EmailAddress

from .models import *


# Create your tests here.
class SignalsTestCase(TestCase):

    def setUp(self):
        #create a test user
        user = User.objects.create_user(username="Tester1",email="tester@gmail.com",password="coolguyy")
        user.save()
        Blog.objects.create(title="title testing",body="testing body",state="draft",author=user)

        try:
            EmailAddress.objects.get(user=user)

        except EmailAddress.DoesNotExist:
            EmailAddress.objects.create(user=user,verified=True)

        notify = Notification.objects.create(header="Test notification",message="Testing the body")
        notify.users.add(user)
        notify.save()


    def test_user_signals(self):
        user = User.objects.get(username="Tester1")
        user.type = "freemium"
        user.save()
        res = False

        try:
            user.freemium
            res = True

        except FreemiumProfile.DoesNotExist:
            res = False

        user.type = "premium"
        user.save()

        try:
            user.premium
            res = True

        except PremiumProfile.DoesNotExist:
            res = False

        self.assertTrue(res)


    def test_blogs_signals(self):
        # self.assertRedirects()
        blog = Blog.objects.get(title="title testing")

        self.assertEqual(blog.slug,"title-testing")

        # check if notification is sent
        # self.assertTrue(Notification.objects.get(header=f"New blog {blog.title}").exists())


        #check when i delete blog
        # blog.delete()

        # self.assertFalse(Notification.objects.get(header=f"New blog {blog.title}").exists())


    def test_social_links_handler(self):
        # Test pre_save signal for SocialLinks model
        social_links = SocialLinks.object.create(twitter_link='', facebook_link='', whatsapp_link='', linkedin_link='',first_payment_link="$$$",second_payment_link="####")
        self.assertEqual(social_links.twitter_link, '#')
        self.assertEqual(social_links.facebook_link, '#')
        self.assertEqual(social_links.whatsapp_link, '#')
        self.assertEqual(social_links.linkedin_link, '#')


    def test_notification_saver_handler(self):
        # Test post_save signal for Notification model
        notify = Notification.objects.get(header="Test notification")
        user = User.objects.get(username="Tester1")
        notify.users.remove(user)
        self.assertFalse(Notification.objects.filter(header='Test Notification').exists())


    def test_premium_profile_delete_handler(self):
        # Test pre_delete signal for PremiumProfile model
        user = User.objects.get(username="Tester1")
        user.type = "premium"
        user.save()
        res = False

        try:
            PremiumProfile.objects.get(user=user)
            res = True

        except PremiumProfile.DoesNotExist:
            res = False

        self.assertTrue(res)
        premium_profile = PremiumProfile.objects.get(user=user)
        premium_profile.delete()
        self.assertTrue(FreemiumProfile.objects.filter(user=user).exists())




    
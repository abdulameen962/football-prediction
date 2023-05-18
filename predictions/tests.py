from django.test import TestCase,Client
from django.db.models import Max
from allauth.account.models  import EmailAddress

from .models import *


# Create your tests here.
class SignalsTestCase(TestCase):

    def setUp(self):
        #create a test user
        User.objects.create(username="Tester1",email="tester@gmail.com")
        user = User.objects.get(username="Tester1")
        Blog.objects.create(title="title testing",body="testing body",state="draft",author=user)
        try:
            email = EmailAddress.objects.get(user=user)

        except EmailAddress.DoesNotExist:
            EmailAddress.objects.create(user=user,verified=True)


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

        #check if notification is sent
        self.assertTrue(Notification.objects.get(header=f"New blog {blog.title}").exists())


        #check when i delete blog
        blog.delete()

        self.assertFalse(Notification.objects.get(header=f"New blog {blog.title}").exists())


    
# from django.test import TestCase,Client
# from django.db.models import Max
# from allauth.account.models  import EmailAddress

# from django.core import mail
# from django.utils import timezone
# from .models import (
#     Blog, User, PremiumProfile, FreemiumProfile,
#     Notification,SocialLinks, Prediction,
# )


# # Create your tests here.
# class SignalsTestCase(TestCase):
    
#     def setUp(self):
#         # Set up any necessary data for the tests
#         self.user = User.objects.create(username='testuser', email='test@example.com')
#         self.blog = Blog.objects.create(title='Test Blog', state='published',body="Testing body",author=self.user)
#         self.notification = Notification.objects.create(header='Test Notification', message='Test Message', created=timezone.now())

#     def test_blog_handler(self):
#         # Test pre_save signal for Blog model
#         self.assertEqual(self.blog.slug, 'test-blog')
#         self.assertFalse(Notification.objects.filter(header='Test Blog Test Blog').exists())

#     def test_blog_delete_handler(self):
#         # Test pre_delete signal for Blog model
#         self.blog.delete()
#         self.assertFalse(Notification.objects.filter(header='Test Blog Test Blog').exists())

#     def test_user_handler(self):
#         # Test post_save signal for User model
#         self.user.type = "freemium"
#         self.user.save()
#         self.assertTrue(FreemiumProfile.objects.get(user=self.user).exists())
#         self.user.type = "premium"
#         self.user.save()
#         self.assertTrue(PremiumProfile.objects.get(user=self.user).exists())
#         self.assertEqual(len(mail.outbox), 1)
#         self.assertEqual(mail.outbox[0].subject, 'Welcome to Frankly Prediction testuser')
#         self.assertEqual(Notification.objects.filter(header='Welcome testuser').count(), 1)

#     def test_user_delete_handler(self):
#         # Test pre_delete signal for User model
#         self.user.delete()
#         self.assertFalse(Notification.objects.filter(header='Welcome testuser').exists())

#     def test_premium_profile_handler(self):
#         # Test pre_save signal for PremiumProfile model
#         self.user.type = "premium"
#         self.user.save()
#         premium_profile = PremiumProfile.objects.get(user=self.user)
#         self.assertEqual(len(premium_profile.watchlist.all()), 0)

#     def test_premium_profile_delete_handler(self):
#         # Test pre_delete signal for PremiumProfile model
#         self.user.type = "premium"
#         self.user.save()
#         premium_profile = PremiumProfile.objects.create(user=self.user)
#         premium_profile.delete()
#         self.assertTrue(FreemiumProfile.objects.filter(user=self.user).exists())

#     def test_notification_saver_handler(self):
#         # Test post_save signal for Notification model
#         self.notification.users.add(self.user)
#         self.notification.save()
#         self.notification.users.remove(self.user)
#         self.assertFalse(Notification.objects.filter(header='Test Notification').exists())

#     def test_social_links_handler(self):
#         # Test pre_save signal for SocialLinks model
#         social_links = SocialLinks.object.create(twitter_link='', facebook_link='', whatsapp_link='', linkedin_link='')
#         self.assertEqual(social_links.twitter_link, '#')
#         self.assertEqual(social_links.facebook_link, '#')
#         self.assertEqual(social_links.whatsapp_link, '#')
#         self.assertEqual(social_links.linkedin_link, '#')


    
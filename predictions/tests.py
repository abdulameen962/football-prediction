from django.test import TestCase,Client
from django.db.models import Max
from allauth.account.models  import EmailAddress

from .models import *


# Create your tests here.
class UserTestCase(TestCase):

    def setUp(self):
        #create a test user
        User.objects.create(username="Tester1",email="tester@gmail.com")

        try:
            user = User.objects.get(username="Tester1")
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
        
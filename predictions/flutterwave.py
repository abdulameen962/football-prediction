from rave_python import Rave,Misc,RaveExceptions
from rave_python.rave_exceptions import IncompletePaymentDetailsError, AuthMethodNotSupportedError
import time
from django.conf import settings
#generate transaction reference
def generateTransactionReference(merchantId):
    """ This is a helper function for generating unique transaction  references.\n
         Parameters include:\n
        merchantId (string) -- (optional) You can specify a merchant id to start references e.g. merchantId-12345678
    """
    rawTime = round(time.time() * 1000)
    timestamp = int(rawTime)
    if merchantId:
        return merchantId + "-" + str(timestamp)
    else:
        return "MC-" + str(timestamp)


# Create your views here.
rave = Rave(f"{settings.RAVE_PUBLIC_KEY}",f"{settings.RAVE_SECRET_KEY}",production=True)
def checkPayment(user):
    try:
        res = rave.Subscriptions.all()
        action = False
        if len(res) > 0:
            res = res["returnedData"]
            res = res["data"]
            res = res["plansubscriptions"]
            for plan in res:
                customer = plan["customer"]
                if user.email == customer["customer_email"] and plan["status"] == "active":
                    action = True
    except RaveExceptions.PlanStatusError as e:
        action = False
        print(e.err)

    return action
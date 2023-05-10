from django.contrib.sites.shortcuts import get_current_site
from .models import League,Prediction


def current_site_processor(request):
    current_site = get_current_site(request)
    results = []
    leagues = League.objects.all()
    if len(leagues) > 0:
        for league in leagues:
            res = {"league":league.id,"types":[]}
            #predictions on the league
            predictions = league.prediction.all()
            correct_score = False
            halftime_correct_score = False
            combo_draws = False
            combo_tickets = False
            # ticker_off = False
            if len(predictions) > 0:
                for predict in predictions:
                    if predict.correct_score != "":
                       correct_score = True
                    

                    if predict.halftime_correct_score != "":
                        halftime_correct_score = True


                    if predict.combo_draws != "":
                        combo_draws = True


                    if predict.combo_tickets != "":
                        combo_tickets = True

            if correct_score:
                correct_score = {"data":"correct_score","name":"Correct scores"}
                res["types"].append(correct_score)


            if halftime_correct_score:
                halftime_correct_score = {"data":"halftime_correct_score","name":"Halftime Correct scores"}
                res["types"].append(halftime_correct_score)

            if combo_draws:
                combo_draws = {"data":"combo_draws","name":"Combo Draws"}
                res["types"].append(combo_draws)


            if combo_tickets:
                combo_tickets = {"data":"combo_tickets","name":"Combo Tickets"}
                res["types"].append(combo_tickets)


            results.append(res)

    context = {"current_site":current_site,
    "site_name":"Predictions",
    "leagues" : League.objects.all(),
    "league_types": results,
    }

    return context
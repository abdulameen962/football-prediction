from django.contrib.sites.shortcuts import get_current_site
from .models import League,SocialLinks


def current_site_processor(request):
    current_site = get_current_site(request)
    results = []
    completed_leagues = []
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

            predictions = league.completed_predictions.all()
            complete_correct_score = False
            complete_halftime_correct_score = False
            complete_combo_draws = False
            complete_combo_tickets = False
            res = {"league":league.id,"types":[]}
            # ticker_off = False
            if len(predictions) > 0:
                for predict in predictions:
                    if predict.correct_score != "":
                       complete_correct_score = True
                    

                    if predict.halftime_correct_score != "":
                        complete_halftime_correct_score = True


                    if predict.combo_draws != "":
                        complete_combo_draws = True


                    if predict.combo_tickets != "":
                        complete_combo_tickets = True

            if complete_correct_score:
                complete_correct_score = {"data":"correct_score","name":"Correct scores"}
                res["types"].append(complete_correct_score)


            if complete_halftime_correct_score:
                complete_halftime_correct_score = {"data":"halftime_correct_score","name":"Halftime Correct scores"}
                res["types"].append(complete_halftime_correct_score)

            if complete_combo_draws:
                complete_combo_draws = {"data":"combo_draws","name":"Combo Draws"}
                res["types"].append(complete_combo_draws)


            if complete_combo_tickets:
                complete_combo_tickets = {"data":"combo_tickets","name":"Combo Tickets"}
                res["types"].append(complete_combo_tickets)


            completed_leagues.append(res)


    leagues = []
    for league in League.objects.all():
        if len(league.prediction.all()) > 0 or len(league.completed_predictions.all()) > 0:
            leagues.append(league)
            

    try:
        social_links = SocialLinks.objects.all().first()

    except SocialLinks.DoesNotExist:
        social_links = ""
    context = {"current_site":current_site,
    "site_name":"Predictions",
    "league_types": results,
    "main_leagues":leagues,
    "social_links": social_links,
    "completed_league_types": completed_leagues,
    }

    return context
    
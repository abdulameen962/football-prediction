# start_celery.sh

cd /vercel/path0 || exit 1
#Activate virtual env
. . venv/bin/activate

celery -A football worker -l info
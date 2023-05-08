# start_celery.sh
echo "Building the project..."
pip install -r requirements.txt

echo "Celery tasks adding"
celery -A football worker -l info
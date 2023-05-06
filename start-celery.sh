echo "Running Celery Tasks..."
celery -A football worker -l info

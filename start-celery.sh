#!/bin/bash

echo "Celery tasks adding"
celery -A football worker -l info
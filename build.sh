# build_files.sh

echo "Building the project..."
pip install -r requirements.txt

echo "Migrating project"
python3.9 manage.py makemigrations
python3.9 manage.py migrate

echo "Collect Static..."
python3.9 manage.py collectstatic --noinput

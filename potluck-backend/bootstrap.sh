export FLASK_APP=./potlucks/index.py
source $(pipenv --venv)/bin/activate
flask run -h 0.0.0.0

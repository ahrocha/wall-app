# wall-app
Simple wall for study purpose

To run locally:

You need docker and docker-compose installed, configured and running properly.
The default urls and ports are:
backend: http://localhost:80/
frontend: http://localhost:3000/
mariadb: 3306

If you want to change the application ports, edit the 3 .env files, at root project directory and also backend and frontend directories:

If you're going to publish, change the database password at .env

1) Download code from github:
git clone https://github.com/ahrocha/wall-app

2) Create .env files (there's sample files)
Go to project directory (probably ):
cd wall-app

And copy the files
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

3) Run docker commands:
docker-compose up -d --build
docker exec -ti backend php artisan migrate
docker exec -ti backend php artisan seed

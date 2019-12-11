.PHONY: up bash down deploy

up:
	docker-compose up -d

bash:
	docker-compose exec bus_collection sh

down:
	docker-compose down

deploy:
	gcloud app deploy

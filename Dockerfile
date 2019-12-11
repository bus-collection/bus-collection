# 開発環境
FROM node:10.17.0-alpine
RUN apk update && \
    npm install -g npm @vue/cli

# ビルド環境
# FROM node:10.17.0-alpine as build-stage
# WORKDIR /app
# RUN apk update && \
#     npm install -g npm @vue/cli
# RUN npm install
# RUN npm run build

# # 本番環境
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

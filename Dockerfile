FROM hayd/alpine-deno:latest
EXPOSE 7700
WORKDIR /app
ADD . /app
RUN deno cache app.ts
CMD ["run", "--allow-net", "app.ts"]
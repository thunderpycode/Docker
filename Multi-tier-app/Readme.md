use myapp
db.users.find().pretty()

Further use mongodb compass


03/11 -- Changed port 3000 --> 5000 ( needs to redeploy and image build ) 
        kubectl apply -f backend-deployment.yaml
        kubectl apply -f backend-service.yaml
        kubectl apply -f .

08/11 -- 



sudo kill -9 $(lsof -t -i :5000)

docker build -t scriptwithabhi/backend-image:latest ./backend
docker build -t scriptwithabhi/frontend-image:latest ./frontend


docker tag backend-image:latest scriptwithabhi/backend-image:latest
docker tag frontend-image:latest scriptwithabhi/frontend-image:latest

docker push scriptwithabhi/backend-image:latest
docker push scriptwithabhi/frontend-image:latest

kubectl apply -f k8s-manifests/


kubectl exec -it frontend-5c4f8d77f-gx8p9 -- curl http://backend:3000

kubectl rollout restart deployment backend

kubectl port-forward svc/frontend 8080:80 &
kubectl port-forward svc/backend 3000:3000 &
kubectl port-forward svc/mongodb 27017:27017 &

sudo kill -9 $(lsof -t -i :30)

issue is from backend url in app.js in backend folder
---

9/11 

everything worked using above troubleshooting. but need to add mongo-db data backup :
 
 hostPath:
      path: /path/to/your/local/mongo-data  # Local directory path on your machine
      type: DirectoryOrCreate
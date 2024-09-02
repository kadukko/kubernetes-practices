Go to backend folder: `cd backend`
Command to build backend image: `docker build -t kubernetes-practices-backend .`

Go to infrastructure folder: `cd infrastructure`
`kubectl apply -f credentials.yaml`
`kubectl apply -f mongodb.yaml`
`kubectl apply -f backend.yaml`

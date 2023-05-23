podman machine init --cpus 4 --memory 6666
podman machine start

podman machine stop
podman machine rm

wget https://github.com/istio/istio/releases/download/1.17.2/istio-1.17.2-osx-arm64.tar.gz
tar xfvz istio-1.17.2-osx-arm64.tar.gz

 
export PATH=./istio-1.17.2/bin:$PATH
     
istioctl install --set profile=demo
kubectl apply -f ./istio/samples/addons
kubectl rollout status deployment/kiali -n istio-system





oc adm policy add-scc-to-group anyuid system:serviceaccounts:istio-system
k9s --kubeconfig "/Users/nhirt/.crc/machines/crc/kubeconfig"

    message: 'pods "istiod-64848b6c78-slzlt" is forbidden: violates PodSecurity "restricted:latest":                                                │
│       seccompProfile (pod or container "discovery" must set securityContext.seccompProfile.type                                                     │
│       to "RuntimeDefault" or "Localhost")'



git clone https://github.com/niklaushirt/training.git






$(minikube ip)


podman tag k8sdemo:lab $(minikube ip):5000/k8sdemo:lab
podman push --tls-verify=false $(minikube ip):5000/k8sdemo:lab
podman run -d --rm --name k8sdemo -p 3000:3000 --env BACKEND_URL=http://k8sdemo-backend:3000/api --network shared  $(minikube ip):5000/k8sdemo:lab

curl http://$(minikube ip):5000/v2/_catalog






minikube start --memory=6000 --cpus=4  --kubernetes-version v1.25.3
kubectl apply -f ./tools/kube-registry.yaml > /dev/null
kubectl port-forward --namespace kube-system $(kubectl get po -n kube-system | grep kube-registry-v0 | \awk '{print $1;}') 5000:5000  > /dev/null &


minikube addons enable registry
minikube addons enable dashboard
minikube dashboard &



# Exam_Prep_Ckad

# CKAD 2-Week Study Plan

> Goal: Prepare efficiently for the Certified Kubernetes Application Developer (CKAD) exam with daily topics, labs, and review.

---

## 📅 Week 1: Foundations & Core Workloads

### ✅ Day 1: Core Concepts & Setup
- Set up `minikube` or `kind`
- Understand Pods, Namespaces, Contexts
- Practice:
  - `kubectl run`, `kubectl explain`, `kubectl get`, `delete`, etc.

`
// macOS with Homebrew
brew install minikube

// Linux
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

// Windows with Chocolatey
choco install minikube

// macOS with Homebrew
brew install kind

// Linux
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.12.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Windows with Chocolatey
choco install kind

`

### ✅ Day 2: Pod Design
- Multi-container Pods: initContainers, sidecars
- Use `kubectl exec`, `logs`, `describe`
- Create YAML for multi-container pods

### ✅ Day 3: Configuration
- ConfigMaps & Secrets
- Use them as env vars or mounted volumes
- Practice `kubectl create configmap/secret`, use in pods

### ✅ Day 4: Probes & Resources
- Liveness & readiness probes
- Set CPU/memory requests & limits
- Practice YAML and live debugging

### ✅ Day 5: Deployments & Rollouts
- Create/update Deployments
- Use `kubectl rollout`, `scale`, `edit`
- Practice rolling updates & rollback

### ✅ Day 6: Review + Quiz
- Revisit Days 1–5
- Practice converting imperative to declarative
- Try mock questions or GitHub CKAD exercises

### ✅ Day 7: Practice Exam 1
- Use Killer.sh or CKAD simulator
- Time: 2 hours
- Review every question, write down weak spots

---

## 📅 Week 2: Services, Storage & Observability

### ✅ Day 8: Services & Networking
- ClusterIP, NodePort, DNS, port-forward
- Practice curling between pods/services

### ✅ Day 9: Persistent Storage
- emptyDir, hostPath, PVC, PV
- Create volumes in Pod YAML
- Understand reclaim policies

### ✅ Day 10: Observability
- Logs, Events, Describe, Exec
- Debug common pod issues (CrashLoopBackOff, etc.)
- Practice: troubleshoot broken apps

### ✅ Day 11: Imperative vs Declarative
- Generate YAML from imperative commands
- Practice `--dry-run=client -o yaml`
- Customize YAML before apply

### ✅ Day 12: Review Weak Topics
- Focus on pain points from Practice Exam 1
- Deep dive into confusing topics (like initContainers, network policies)

### ✅ Day 13: Practice Exam 2
- Full-length mock
- Use bookmarks only
- Practice managing multiple namespaces

### ✅ Day 14: Final Review
- Refresh key concepts
- Use cheat sheet/bookmarked docs
- Practice fast context switching & YAML creation

---

## ✅ Useful Resources
- KodeKloud CKAD Course
- Killer.sh Simulator (comes with exam)
- GitHub:
  - `dgkanatsios/CKAD-exercises`
  - `ahmetb/kubernetes-network-policy-recipes`
- [Kubernetes Docs](https://kubernetes.io/docs/) (bookmark useful pages!)


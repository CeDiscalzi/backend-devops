pipeline {
    agent any
    environment {
        USERNAME = "cmd"
    }
    stages {
        stage("Build - instalacion de dependencias") {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages{
                stage("build - instalacion dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("build - ejecucion de test"){
                    steps{
                        sh 'npm run test'
                    }
                }
                stage("build - build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }
            }    
        }
        stage("delivery - subida a nexus"){
            steps {
                script {
                    docker.withRegistry("localhost:8082","registry"){
                        sh 'docker build -t backend-devops .'
                        sh 'docker tag backend-devops:latest localhost:8082/backend-devops:latest'
                        sh 'docker push localhost:8082/backend-devops:latest'
                    }
                }
            }
        }
    }
}

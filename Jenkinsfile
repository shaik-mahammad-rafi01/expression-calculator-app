pipeline{
    agent any
    tools{
        nodejs('NodeJs 24.5.0') 
    }
    stages{
        stage('checkout project repository'){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/shaik-mahammad-rafi01/expression-calculator-app.git']])
            }
        }
        stage('Install Required Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('code coverage'){
            steps{
                sh 'npx jest --coverage'
            }
        }

    }
    post{
      success{
        mail to: 'rafi.shaik@everest.engineering',
        subject: "Pipeline is run success",
        body: "Pipeline run successfully"
      }

      failure{
        mail to : 'rafi.shaik@everest.engineering',
        subject : "Pipeline is failed - ${currentBuild.fullDisplayName}",
        body : "Something incorrect in pipeline - ${env.BUILD_URL}"
      }
    }
}
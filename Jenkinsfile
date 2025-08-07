pipeline{
  agent any
  tools{
    nodejs('NodeJs 24.5.0') 
  }
  stages{
    stage('checkout github repository'){
      steps{
          checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/shaik-mahammad-rafi01/expression-calculator-app.git']])

      }
  }
    stage('Install Dependencies'){
      steps{
        sh 'npm install'
      }
    }
    
}
}

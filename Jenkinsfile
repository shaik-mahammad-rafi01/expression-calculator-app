pipeline{
  agent any
  stages{
    stage('checkout github repository'){
      steps{
          checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/shaik-mahammad-rafi01/expression-calculator-app.git']])

      }
  }
    
}
}

pipeline{
    agent any

    tools {
      nodejs 'node'
    }

    stages{
        /*stage("Git checkout"){
            steps{
                // Get some code from a GitHub repository
                git credentialsId: 'ssh_priv_key', url: 'git@github.com:szairi2011/my-admin-portal.git', branch: 'users-list-page'
            }
        }*/
        stage('Build') {
          steps {
            // Build ng app
            sh "npm install"
          }
        }
        stage('Deploy') {
          steps {
            // Deploy ng app and run json-server
            sh "npm run dev"
          }
        }
    }
}

pipeline{
    agent {
        label "master"
    }

    stages{
        stage("拉代码"){
            steps {
                sh "mkdir -p mall-vue3"
                dir("mall-vue3"){
                    checkout(
                        [
                            $class: "GitSCM",
                            branches: [[name: "master"]],
                            extensions: [[$class: "CleanBeforeCheckout"]],
                            userRemoteConfigs: [[url: "git@gitee.com:11547299/newbee-mall-vue3-app.git"]]
                        ]
                    )
                }
            }
        }

        stage("构建+发布"){
            steps{
                sh '''
                    cd mall-vue3
                    sh docker_deploy.sh
                '''
            }
        }
    }

    post {
        always {
            emailext body: '$DEFAULT_CONTENT', recipientProviders: [[$class: 'RequesterRecipientProvider']], subject: '$DEFAULT_SUBJECT', to: '$DEFAULT_RECIPIENTS'
        }
    }
}
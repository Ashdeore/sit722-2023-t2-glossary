var express = require('express');
var router = express.Router();


const tableList =[
  { 'id':1,'Term':'Devops','Defination':' Is an IT approach that fosters collaboration between development and operations teams,leading to faster deployment, improved software quality, and better alignment with business objectives.',
  'Refrences':'https://www.consumersearch.com/technology/key-principles-devops-overview-professionals?utm_content=params%3Ao%3D740007%26ad%3DdirN%26qo%3DserpIn.'
  },{
   'id':2,'Term':'DevOps Deployment','Defination':'Continuous development is an iterative software development process that includes testing,integration, delivery, and deployment, enabling organizations to achieve faster delivery,lower risks, and overcome bandwidth barriers. ',
  'Refrences':'https://www.spiceworks.com/tech/devops/articles/what-is-devops/'
  },{
   'id':3,'Term':'DevOps Software Quality','Defination':'DevOps aims to increase deployment speed, frequency, and quality by blending development and operations,attracting interest from researchers due to its diverse impact on software development industries.',
  'Refrences':'https://www.researchgate.net/publication/'
  },
  {
   'id':4,'Term':'Building and integration','Defination':'Continuous Integration (CI) in DevOps ensures developers have access to up-to-date,validated code, allowing multiple developers to work on the same source code confidently,saving time and enhancing application development speed and reliability.',
  'Refrences':'https://www.spiceworks.com/tech/devops/articles/what-is-devops/'
  }
  ,{
   'id':5,'Term':'DevOps Methods','Defination':'Scrum, Kanban, and Agile are popular DevOps methods that help organizations speed up development and product releases through iterative approaches,visualizing workflows, and emphasizing flexibility and collaboration.',
  'Refrences':'https://www.netapp.com/devops-solutions/what-is-devops/'
  },
  {
   'id':6,'Term':'DevOps Automation','Defination':'Automation is a better solution because it focuses on the demand-side factors within our control.Leaders should leverage DevOps automation-first solutions to optimize operations and focus on demand side.',
  'Refrences':'https://www.infoq.com/articles/devops-automation-workforce-shortages/'
  },
  {
   'id':7,'Term':'DevOps Monitoring','Defination':'DevOps Monitoring involves using technical practices and tools to track and measuresystem behavior in real-time, providing insights into system performance and health.',
  'Refrences':'https://www.atlassian.com/devops/devops-tools/devops-monitoring'
  },
  {
   'id':8,'Term':'DevSecOps','Defination':'DevSecOps is an approach that integrates security throughout the entire IT lifecycle, emphasizing collaboration between development, security, and operations teams. DevSecOps incorporates security from the start, automating security measures to maintain agility without compromising safety. ',
  'Refrences':'https://www.redhat.com/en/topics/devops/what-is-devsecops'
  },
  {
   'id':9,'Term':'Microservices Architecture','Defination':' a microservices architecture with DevOps has many advantages for developers and businesses. It allows for faster development and deployment of software, and each service can work independently without affecting others, making it more flexible and reliable. Teams can work better together, and different technology can be used for each service, resulting in improved performance and customer satisfaction. Overall, it helps businesses deliver better software faster and stay competitive in the market.',
  'Refrences':'https://www.linkedin.com/pulse/benefits-using-microservices-architecture-devops-arcsona-inc/'
  },
  {
   'id':10,'Term':'DevOps Frameworks','Defination':'DevOps frameworks are structured approaches and methodologies that help organizations streamline software development and IT operations through collaboration,automation, and continuous improvement.',
  'Refrences':'https://fourweekmba.com/devops-frameworks/ [Accessed 21 Jul. 2023]'
  },
  {
   'id':11,'Term':'DevOps Tools','Defination':'A successful DevOps process requires utilizing appropriate tools for the key phases of the DevOps lifecycle, including discovery, planning, building,testing, monitoring, operating, and providing continuous feedback.',
  'Refrences':'https://www.atlassian.com/devops/devops-tools'
  },
  {
   'id':12,'Term':'DevOPS Process and Platform','Defination':' paper introduces DevOpsML, a framework that combines DevOps and modeling principles to make DevOps processes more accessible to non-technical users on low-code engineering platforms',
  'Refrences':'https://doi.org/10.1145/3417990.3420203'
  },
  {
   'id':13,'Term':'Azure DevOps Server','Defination':'A Microsoft product, offers a comprehensive suite of tools including version control, reporting,requirements management, project management, automated builds, testing, and release management.It supports the entire application lifecycle and facilitates DevOps practices effectively.',
  'Refrences':'https://azure.microsoft.com/en-au/products/devops [Accessed 4 Aug. 2023]'
  },
  {
   'id':14,'Term':'DevOps Team Structure','Defination':'The current interest in DevOps stems from the evolving practices, culture, and team dynamics, with Agile methodologies promoting collaborative work instead of parallel efforts.This continuous evolution impacts both people and the development of products and platforms.',
  'Refrences':'https://www.mulesoft.com/resources/api/devops-team-structure',
  },
  {
   'id':15,'Term':'DevOps Security','Defination':'DevOps security is a philosophy that integrates development, operations, and security, aiming to eliminate barriers between software development and IT operations.',
  'Refrences':'https://www.fortinet.com/resources/cyberglossary/devops-security.'
  },
  {
   'id':16,'Term':'DevOps Cultural Philosophy','Defination':'Transitioning to DevOps involves a cultural and mindset shift, breaking down barriers between development and operations teams to optimize productivity and reliability. DevOps teams collaborate closely,take ownership of services, and consider customer needs, while also integrating quality assurance and security throughout the development and infrastructure lifecycle.',
  'Refrences':'https://aws.amazon.com/devops/what-is-devops/.'
  },
  {
   'id':17,'Term':'DevOps and Scrum','Defination':'Scrum is a flexible framework focused on values and principles for complex product development, not a rigid methodology.It sets the minimum requirements, but teams can add practices to enhance value delivery within the Scrum Framework. ',
  'Refrences':'https://www.scrum.org/resources/blog/scrum-and-devops.'
  },
  {
   'id':18,'Term':'DevOps Collaboration','Defination':'DevOps emphasizes close collaboration between development and operations teams, breaking down silos and fostering communication.',
  'Refrences':'https://www.softwaretestinghelp.com/collaboration-in-devops.'
  },
  {
   'id':19,'Term':'DevOps Automation','Defination':'> DevOps automation is the addition of technology that performs tasks with reduced human assistance to processes that facilitate feedback loopsbetween operations and development teams so that iterative updates can be deployed faster to applications in production.',
  'Refrences':'https://www.redhat.com/en/topics/automation/what-is-devops-automation#what-can-be-automated [Accessed 4 Aug. 2023].'
  },
  {
   'id':20,'Term':'DevOps Culture','Defination':'DevOps is a cultural movement and set of practices that focus on enhancing collaboration and communication between development and operations teams.Organizations adopt DevOps principles for their significant benefits, including faster time to production, improved reliability, and enhanced stability.',
  'Refrences':'https://doi.org/10.1109/ACCESS.2022.3145970.'
  },
  { 'id':21,'Term':'Artificial Intelligence','Defination':'Defining intelligence is crucial in assessing if an artificial system truly qualifies for AI, as it involves a machine ability to perform tasks that would have required human intelligence.',
 'Refrences':'Diaz, M. (2023). What Is AI? Here’s Everything You Need to Know about Artificial Intelligence. [online] ZDNet. Available at:"https://www.zdnet.com/article/what-is-ai-heres-everything-you-need-to-know-about-artificial-intelligence/".'
 },{
  'id':22,'Term':'Netapp','Defination':'NetApp empowers DevOps by enabling operations teams to automate infrastructure and developers to work in reliable, predictable environments with reduced friction, resulting in better business outcomes and enhanced developer productivity across on-premises and cloud environments.  ',
 'Refrences':'netapp (n.d.). What Is DevOps? - Practices and Benefits Explained | NetApp. [online] www.netapp.com. Available at:"https://www.netapp.com/devops-solutions/what-is-devops/.'
 },{
  'id':23,'Term':'Continuous improvement and minimization of waste','Defination':'High-performing DevOps teams continually seek improvement by automating tasks and analyzing performance metrics to enhance release efficiency and mean-time-to-recovery.',
 'Refrences':'GitLab (2022). DevOps explained. [online] GitLab. Available at:"https://about.gitlab.com/topics/devops/".'
 },
 {
  'id':24,'Term':'DevOps Mlops','Defination':' MLOps is meant to standardize and streamline the lifecycle of machine learning models in production by orchestrating the movement of machine learning models, data, and outcomes among the systems. ',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/all-the-ops-devops-dataops-mlops-and-aiops/ [Accessed 24 Aug. 2023].'
 }
 ,{
  'id':25,'Term':'AIOPs','Defination':'AIOps, or artificial intelligence (AI) for IT operations. AIOps replaces many tedious, manual IT operations with an intelligent IT operations platform that collects structured and unstructured data, identifies events and patterns, reduces noise, and reports or remediates issues, thus greatly enhancing the productivity of the team responsible for keeping operations up and running. ',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/all-the-ops-devops-dataops-mlops-and-aiops/ [Accessed 24 Aug. 2023].'
 },
 {
  'id':26,'Term':'DataOps','Defination':'DataOps is simply applying DevOps to data instead of an application or traditional code. DataOps is managing the whole data lifecycle, from creation to deployment to monitoring that data. Similarly, MLOps applies DevOps principles but to machine learning models, which are like applications but requiring training, running interference, and verifying that the results are accurate. ',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/all-the-ops-devops-dataops-mlops-and-aiops/. '
 },
 {
  'id':27,'Term':'Resource optimization','Defination':'The more data you have, the better you’ll understand the topology or resource graph or the grouping. With the topology, you can optimize the usage of resources to help avoid problems altogether or remediate problems quickly. ',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/all-the-ops-devops-dataops-mlops-and-aiops/. '
 },
 {
  'id':28,'Term':'Spring Boot','Defination':'Spring Boot applications are quite popular among users in creating web and stand-alone Java applications. Spring Boot applications are self-contained -- all the application dependencies and requirements including the middleware server are packaged in a Spring Boot JAR. ',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/modernize-and-optimize-spring-boot-applications/ [Accessed 24 Aug. 2023].'
 },
 {
  'id':29,'Term':'Orchestration','Defination':'Deploying complex application systems is not a new problem. Over the past few decades, the need for automated configuration and management, or orchestration, of software has been identified many times. ',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/orchestrate-multi-tier-application-deployments-with-ansible-pt-1/ [Accessed 24 Aug. 2023].'
 },
 {
  'id':30,'Term':'Operator Framework','Defination':'A technology coming from CoreOS, Operator Framework is one of the foundations of the OpenShift Container Platform (OCP), version 4. Operator Framework uses the idea of modeling applications as Kubernetes resources, extending Kubernetes API with custom, application-oriented object types.',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/orchestrate-multi-tier-application-deployments-with-ansible-pt-1/ [Accessed 24 Aug. 2023] '
 },
 {
  'id':31,'Term':'DevOps in High Demand','Defination':'DevOps is an integral part of the Agile methodology and helps reduce the time between code releases from months to weeks. The future scope of DevOps involves numerous job opportunities in multiple sectors.',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':32,'Term':'Future of DevOps','Defination':'DevOps is a methodology that aims to bring together developers and operations to speed up the deployment process. DevOps is not just about deploying code faster; it also helps with the quality of the code by reducing bugs and providing more valuable features to customers.  ',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':33,'Term':'Microservices architecture ','Defination':'A new way of building software allows the development and deployment process to be more agile, flexible, and scalable. In this type of architecture, apps are broken down into smaller pieces (microservices) that can be developed and deployed independently.',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':34,'Term':'DevOps Cloud-native technology ','Defination':'Cloud-native technology is a new way to design and deploy software, which relies on microservices, containers, and immutable infrastructure. This new software development and deployment approach has many benefits for DevOps professionals',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':35,'Term':'DevOps Automation and CI/CD','Defination':'DevOps involves software development and IT operations practices to create a more efficient, cost-effective, and robust system. The rules center on collaboration between software developers and IT operations to improve workflow.',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':36,'Term':'AI/ML in the DevOps framework','Defination':'Technologies are now being used to automate repetitive tasks, optimize resource allocation, and improve quality assurance. Some companies use AI and ML to optimize resource allocation by allocating resources based on demand or supply levels at any given time.',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':37,'Term':'Integrating Kubernetes with DevOps','Defination':'With the rise of Kubernetes as a leading container orchestration engine, it has become even more accessible for organizations to integrate Kubernetes with DevOps.',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':38,'Term':'Integration of Azure DevOps','Defination':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops.  ',
 'Refrences':'www.knowledgehut.com. (n.d.). The Future of DevOps: 2023 and Beyond. [online] Available at: https://www.knowledgehut.com/blog/devops/future-of-devops. '
 },
 {
  'id':39,'Term':'DevOps Cultural Philosophy','Defination':'Transitioning to DevOps requires a change in culture and mindset. At its simplest, DevOps is about removing the barriers between two traditionally siloed teams, development and operations. In some organizations, there may not even be separate development and operations teams; engineers may do both. With DevOps, the two teams work together to optimize both the productivity of developers and the reliability of operations.',
 'Refrences':'developer.ibm.com. (n.d.). IBM Developer. [online] Available at: https://developer.ibm.com/articles/orchestrate-multi-tier-application-deployments-with-ansible-pt-1/ [Accessed 24 Aug. 2023] '
 },
 {
  'id':40,'Term':'Set precise DevOps standards','Defination':'Well-defined DevOps standards enable you to create quality gates on each code check-in, then run tests and deploy. It saves your teams from repetitive, error-prone manual tasks and optimizes their development efforts.',
 'Refrences':'enterprisersproject.com. (n.d.). 10 ways DevOps can help reduce technical debt. [online] Available at: https://enterprisersproject.com/article/2022/6/devops-reduce-technical-debt. '
 },
 {
  'id':41,'Term':'CI/CD Pipeline','Defination':'A pipeline is a process that drives software development through a path of building, testing, and deploying code, also known as CI/CD. By automating the process, the objective is to minimize human error and maintain a consistent process for how software is released.',
 'Refrences':'www.redhat.com. (2022). What is a CI/CD pipeline? [online] Available at: https://www.redhat.com/en/topics/devops/what-cicd-pipeline. '
 },
 {
  'id':42,'Term':'DevOps Containers and CI/CD pipelines  ','Defination':'Traditional CI/CD systems are designed for pipelines that use virtual machines, but cloud-native application development brings advantages to CI/CD pipelines.',
 'Refrences':'www.redhat.com. (2022). What is a CI/CD pipeline? [online] Available at: https://www.redhat.com/en/topics/devops/what-cicd-pipeline. '
 },
 {
  'id':43,'Term':'DevOps Engineer','Defination':'A DevOps engineer introduces processes, tools, and methodologies to balance needs throughout the software development life cycle, from coding and deployment, to maintenance and updates.  ',
 'Refrences':'www.redhat.com. (2022). What is a CI/CD pipeline? [online] Available at: https://www.redhat.com/en/topics/devops/what-cicd-pipeline. '
 },
 {
  'id':44,'Term':'DevOps Essentials','Defination':'DevOps engineers build new skills on top of their current experience. Tasks like data management and library updates for new product releases combine with needs for leadership and collaboration across teams. It is important for DevOps engineers to understand the fundamentals of application development and delivery.  ',
 'Refrences':'www.redhat.com. (n.d.). Who is a DevOps engineer? [online] Available at: https://www.redhat.com/en/topics/devops/devops-engineer. '
 },
 {
  'id':45,'Term':'DevOps Version Control','Defination':'Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.',
 'Refrences':'Atlassian (n.d.).[online]. Available at: https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as. '
 },
 {
  'id':46,'Term':'Benefits of version control systems','Defination':'Using version control software is a best practice for high performing software and DevOps teams. Version control also helps developers move faster and allows software teams to preserve efficiency and agility as the team scales to include more developers.  ',
 'Refrences':'Atlassian (n.d.).[online]. Available at: https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as. '
 },
 {
  'id':47,'Term':'DevOps configuration s a Code','Defination':'Config as Code is a way to manage application or operating system settings through text files in a code repository.  ',
 'Refrences':'octopus.com. (2022). DevOps glossary. [online] Available at: https://octopus.com/devops/glossary/. '
 },
 {
  'id':48,'Term':'DevOps Container Registry','Defination':'A container registry catalogs and stores container images. It acts as a directory for team members and deployment processes.  ',
 'Refrences':'octopus.com. (2022). DevOps glossary. [online] Available at: https://octopus.com/devops/glossary/.'
 },
 {
  'id':49,'Term':'DevOps Deployment','Defination':'A deployment is the process of sending or installing deployable artifacts to targets where applications will run. That could include physical and virtual media like servers or cloud solutions',
 'Refrences':'octopus.com. (2022). DevOps glossary. [online] Available at: https://octopus.com/devops/glossary/. '
 },
 {
  'id':50,'Term':'DevOps using Docker','Defination':'Docker provides the leading technology for building and running containers. The Docker format, OCI, is open source and industry standard, supported by all major operating systems.  ',
 'Refrences':'octopus.com. (2022). DevOps glossary. [online] Available at: https://octopus.com/devops/glossary/. '
 }]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Glossary table', Sub_ash:'DevOps Table - Its a  valuable source that would describe Devops and its important terms',names:tableList });
});

module.exports = router;

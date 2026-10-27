const supportingPortfolio = 'documents/Sahil_Robotics_Portfolio.pdf';
const additionalProjects = {
  knee: {
    label: '06 / ASSISTIVE ROBOTICS & MECHANICAL DESIGN', title: 'Knee rehabilitation: designing for guided motion.',
    summary: 'An undergraduate assistive-robotics project combining mechanism research, SolidWorks concepts, prototype development and an exploratory image-classification experiment.',
    meta: ['Undergraduate project · HITS', 'CAD / prototype development / research'],
    problem: 'The design goal was to support guided knee rehabilitation with an arc-like movement rather than a simple translation in the X–Y plane. The mechanism needed to accommodate a seated user and transfer motion through the foot support.',
    approach: 'I compared mechanism alternatives, developed several CAD concepts and explored the motion of the supporting links and foot platform. Alongside the mechanical work, I experimented with a convolutional image classifier for knee-condition grading.',
    contributions: ['Researched and compared existing rehabilitation mechanisms and their limitations.', 'Created SolidWorks assemblies, alternative mechanisms and multi-view CAD drawings.', 'Contributed to prototype development and mechanical iteration.', 'Explored a TensorFlow CNN workflow with training curves and a confusion matrix.'],
    image: 'assets/knee-cad.webp', imageAlt: 'SolidWorks CAD rendering of a knee rehabilitation mechanism with a foot support and linked mechanism', imageCaption: 'One of my knee-rehabilitation CAD concepts, extracted from the uploaded portfolio.',
    technologies: ['SolidWorks', 'Mechanical design', 'Prototyping', 'ANSYS', 'TensorFlow', 'Python', 'CNN'],
    nodes: [
      ['01 / REQUIREMENTS', 'Seated user & guided arc', 'The mechanism was conceived around a seated user, a foot contact point and a controlled movement path. The intended motion informed the supporting structure and link geometry.'],
      ['02 / MECHANISM', 'Drive → links → foot support', 'Several mechanisms were compared in CAD. My design work explored how the drive and supporting links could create the desired movement at the foot platform.'],
      ['03 / DEVELOPMENT', 'CAD concepts & prototypes', 'SolidWorks assemblies supported design comparison and prototype development. The portfolio contains multiple mechanical arrangements rather than one universally validated final mechanism.'],
      ['04 / SEPARATE AI STUDY', 'Image → CNN → grade', 'A separate image-classification proof of concept explored knee-condition grading. Training curves and a confusion matrix document the experiment; they do not establish clinical performance or closed-loop control of the mechanism.']
    ],
    flow: 'Motion requirements → mechanism alternatives → SolidWorks assemblies → prototype development → design iteration',
    stats: [['CAD', 'MULTIPLE MECHANISM CONCEPTS'], ['Prototype', 'MECHANICAL DEVELOPMENT'], ['Research', 'ASSISTIVE ROBOTICS PUBLICATIONS']],
    rows: [['Mechanism alternatives & assemblies', 'SolidWorks', 'Developed'], ['Physical models', 'Prototype development', 'Reported'], ['CNN classification experiment', 'Training / confusion matrix', 'Exploratory'], ['Clinical effectiveness', 'Patient study', 'Not validated']],
    scope: 'This is an engineering research and prototype project. The portfolio documents designs and a separate CNN experiment; it does not demonstrate clinical effectiveness, a certified medical device, or a fully tested feedback controller.',
    lesson: 'Mechanism geometry and the user contact arrangement shape the motion that a rehabilitation robot can deliver. CAD comparison and prototypes helped expose design trade-offs before further testing.',
    evidence: 'Uploaded project portfolios · knee-rehabilitation design and classifier sections.',
    resources: [['Supporting project portfolio (PDF)', 'CAD concepts, training output and project descriptions', supportingPortfolio], ['IJRA publication', 'Design and Development of Knee Rehabilitation Robot', 'https://doi.org/10.11591/ijra.v13i4.pp423-431'], ['AIP conference paper', 'Design and Evaluation of Various Knee Assistive Mechanisms for Rehabilitation', 'https://doi.org/10.1063/5.0179010']],
    gallery: [
      ['assets/knee-prototype-design.webp', 'Seated-user CAD study showing the rehabilitation mechanism and foot support.'],
      ['assets/knee-cnn-training.webp', 'Training-loss and accuracy curves from the exploratory CNN experiment.'],
      ['assets/knee-cnn-confusion.webp', 'Confusion matrix from the classifier experiment; no clinical validation is claimed.']
    ]
  },
  borewell: {
    label: '07 / RESCUE ROBOTICS DESIGN', title: 'Borewell rescue: a compact gripping concept.',
    summary: 'A mechanical design project exploring a compact rescue mechanism for a narrow borewell, with alternative gripper arrangements and a CAD motion demonstration.',
    meta: ['Undergraduate design project', 'CAD concepts / mechanical demonstration'],
    problem: 'A rescue mechanism operating inside a narrow vertical space has limited room for deployment and gripping. The project explored how to package the joints and gripper while keeping the design simple and affordable.',
    approach: 'I developed alternative robotic-arm and gripper designs in SolidWorks, examining dimensions, joint functionality and how the mechanism could deploy inside the constrained space.',
    contributions: ['Developed alternative CAD concepts for the rescue system.', 'Worked on the compact arm and gripping mechanism.', 'Considered dimensional constraints, joint motion and assembly simplicity.', 'Prepared model views and a short mechanical motion demonstration.'],
    image: 'assets/borewell-cad.webp', imageAlt: 'SolidWorks model of the borewell rescue system showing its narrow vertical structure and gripper', imageCaption: 'Borewell rescue mechanism from the uploaded project portfolio.',
    technologies: ['SolidWorks', 'Gripper design', 'Mechanisms', 'CAD', 'Prototyping'],
    nodes: [
      ['01 / CONSTRAINTS', 'Narrow vertical working space', 'The borewell geometry constrains the overall diameter, deployment arrangement and access to the target. Packaging is therefore part of the mechanism design problem.'],
      ['02 / STRUCTURE', 'Support & deployment arrangement', 'The CAD models explore a vertical structure carrying the gripping assembly. Layout and joint clearances affect how the mechanism can be lowered and deployed.'],
      ['03 / GRIPPING', 'Jointed rescue gripper', 'The project investigated soft-gripping concepts and the joint motion needed to surround a target. Safe contact was a design intention, not a demonstrated rescue outcome.'],
      ['04 / REVIEW', 'CAD views & motion study', 'Alternative model views and the embedded design demonstration make the mechanism inspectable. The evidence supports a design study rather than field deployment.']
    ],
    flow: 'Dimensional constraints → support structure → deployable joints → gripper mechanism → CAD motion review',
    stats: [['2', 'DESIGN ALTERNATIVES REPORTED'], ['CAD', 'GRIPPER & STRUCTURE'], ['9 s', 'MECHANICAL DEMO CLIP']],
    rows: [['Alternative rescue-system designs', 'SolidWorks', 'Developed'], ['Mechanical motion demonstration', 'CAD model', 'Available'], ['Successful rescue / load validation', 'Field conditions', 'Not demonstrated']],
    scope: 'The supporting material contains CAD models and a mechanical animation. It does not establish a tested rescue procedure, a certified lifting system, safe contact forces or successful field use.',
    lesson: 'A compact mechanism needs both a feasible gripping action and enough clearance to deploy it. Comparing alternative assemblies made these constraints visible early in development.',
    evidence: 'Uploaded project portfolios · borewell-rescue sections and embedded demonstration.',
    resources: [['Supporting project portfolio (PDF)', 'Initial designs and the rescue-system model', supportingPortfolio], ['GitHub profile', 'My robotics and software work', 'https://github.com/sahil86469']],
    gallery: [['assets/borewell-alternative.webp', 'Alternative gripper arrangement and vertical support model.']],
    video: ['assets/borewell-design-demo.mp4', 'Mechanical design demonstration from the uploaded presentation. This is a CAD animation, not a rescue test.', 'assets/borewell-cad.webp']
  },
  swarm: {
    label: '08 / COOPERATIVE ROBOTICS', title: 'Cooperative robots: exploring shared motion.',
    summary: 'A Webots simulation project studying communication between homogeneous mobile robots, using a central world node to exchange movement information.',
    meta: ['Undergraduate simulation project', 'Webots / communication experiments'],
    problem: 'Cooperative robots need a way to exchange state and movement information. The project explored a communication structure for coordinating similar robots in a shared virtual environment.',
    approach: 'I used Webots and a central world node to relay speed information between robots, then explored cumulative motion in the X–Y plane. The work also revealed the need for obstacle-avoidance interrupts.',
    contributions: ['Studied communication methods for homogeneous robot groups.', 'Developed a central-node communication workflow in Webots.', 'Explored motion information exchange and cumulative movement.', 'Identified obstacle avoidance and interrupt control as unresolved integration needs.'],
    image: 'assets/swarm-webots.webp', imageAlt: 'Webots simulation of multiple mobile robots on a checkerboard environment with controller code', imageCaption: 'Webots communication and movement experiments from the uploaded portfolio.',
    technologies: ['Webots', 'Python', 'Robot communication', 'Multi-robot coordination', 'Simulation'],
    nodes: [
      ['01 / ROBOTS', 'Homogeneous mobile agents', 'Similar robot models operate in a shared virtual environment. The experiment focuses on communication and coordinated movement rather than heterogeneous task allocation.'],
      ['02 / COMMUNICATION', 'Central world node', 'The world node acts as the communication medium. Movement information is exchanged through this central coordination structure.'],
      ['03 / MOVEMENT', 'Shared speed & X–Y motion', 'Speed information supports cumulative motion in the plane. The portfolio shows simulation tests of this communication-to-movement workflow.'],
      ['04 / LIMITATION', 'Obstacle interrupts', 'The reported movement outcome was not fully satisfactory because obstacle avoidance needed interrupt control. Reliable collision-free swarm navigation was not established.']
    ],
    flow: 'Robot movement state → central world node → shared movement information → individual robot controllers',
    stats: [['Webots', 'VIRTUAL ROBOT ENVIRONMENT'], ['Central node', 'COMMUNICATION STRUCTURE'], ['X–Y', 'COOPERATIVE MOTION STUDY']],
    rows: [['Inter-robot movement information', 'Webots / world node', 'Explored'], ['Cumulative motion', 'Shared simulation', 'Demonstrated'], ['Obstacle-avoidance interrupts', 'Coordination workflow', 'Incomplete']],
    scope: 'This is a simulation learning project. The original portfolio notes that the final movement result needed further interrupt control for obstacles. No robust collision-free behaviour or real-robot swarm deployment is claimed.',
    lesson: 'Communication alone is insufficient for reliable cooperation. Local obstacle handling must be able to interrupt coordinated motion before the group can operate in a cluttered environment.',
    evidence: 'Uploaded project portfolios · homogeneous swarm and Webots sections.',
    resources: [['Supporting project portfolio (PDF)', 'Webots screenshots and communication approach', supportingPortfolio], ['GitHub profile', 'My robotics and software projects', 'https://github.com/sahil86469']],
    gallery: [['assets/swarm-coordination.webp', 'Additional Webots test view showing the robot group and controller output.']]
  },
  sanitizer: {
    label: '09 / EMBEDDED ROBOTICS & HARDWARE', title: 'A sensor-driven sanitizing prototype.',
    summary: 'An Arduino mobile-robot prototype developed around ultrasonic obstacle avoidance and IR-triggered spraying, with circuit simulation and a chassis carrying a water tank.',
    meta: ['Undergraduate hardware project', 'Arduino / sensors / physical prototype'],
    problem: 'The concept was to help small shops carry out periodic sanitizing tasks using an affordable mobile platform. The prototype needed obstacle sensing, spray triggering and a chassis that could carry the tank and electronics.',
    approach: 'I developed the circuit and control logic in Tinkercad, assembled the robot and tested the chassis arrangement with the water tank. Ultrasonic measurements supported basic avoidance, while an IR sensor triggered spraying within its detection range.',
    contributions: ['Built and simulated the Arduino circuit and basic control logic.', 'Integrated ultrasonic obstacle sensing and IR-based spray triggering.', 'Assembled the mobile chassis, electronics and tank arrangement.', 'Documented the prototype, internal wiring and Tinkercad circuit.'],
    image: 'assets/sanitizer-prototype.webp', imageAlt: 'Physical sanitizing robot prototype with a wheeled chassis, electronics and water tank', imageCaption: 'My physical sanitizing-robot prototype from the uploaded portfolio.',
    technologies: ['Arduino', 'Tinkercad', 'Ultrasonic sensor', 'IR sensor', 'Embedded control', 'Wiring', 'Prototyping'],
    nodes: [
      ['01 / OBSTACLE INPUT', 'Ultrasonic distance sensing', 'The avoidance routine uses distance input from the ultrasonic sensor to respond to nearby obstacles. This is basic reactive behaviour rather than mapped autonomous navigation.'],
      ['02 / TRIGGER INPUT', 'IR object detection', 'The IR sensor provides the trigger for spray activation. Its limited detection distance constrains how the robot can approach a target surface.'],
      ['03 / CONTROLLER', 'Arduino decision logic', 'The Arduino reads the sensor inputs and drives the prototype’s movement and spray logic. Tinkercad was used to inspect the circuit and test the code before assembly.'],
      ['04 / HARDWARE', 'Chassis, tank & electronics', 'The chassis was tested with the tank arrangement and onboard electronics. Photographs document the physical assembly and internal wiring.']
    ],
    flow: 'Ultrasonic + IR input → Arduino control logic → movement / spray commands → physical prototype',
    stats: [['Hardware', 'PHYSICAL PROTOTYPE'], ['2 inputs', 'ULTRASONIC + IR'], ['Tinkercad', 'CIRCUIT & CODE TESTING']],
    rows: [['Circuit and controller logic', 'Tinkercad', 'Tested'], ['Robot and tank arrangement', 'Physical chassis', 'Assembled'], ['Obstacle / spray behaviour', 'Basic sensor control', 'Implemented'], ['Sanitizing effectiveness', 'Controlled efficacy study', 'Not validated']],
    scope: 'The evidence shows an embedded robotics prototype and basic sensor-driven behaviour. It does not establish disinfection effectiveness, coverage performance or reliable autonomous operation in an occupied shop.',
    lesson: 'A useful prototype connects the circuit, code and mechanical load. Tank placement, wiring access and sensor range all affect how the assembled robot behaves.',
    evidence: 'Uploaded project portfolios · sanitizing robot description, circuit and prototype photographs.',
    resources: [['Supporting project portfolio (PDF)', 'Circuit, wiring and physical prototype images', supportingPortfolio], ['GitHub profile', 'My robotics and software projects', 'https://github.com/sahil86469']],
    gallery: [['assets/sanitizer-circuit.webp', 'Tinkercad circuit used for simulation and code testing.'], ['assets/sanitizer-electronics.webp', 'Internal view of the Arduino, wiring and onboard electronics.']]
  }
};

const projectEvidence = {
  ugv: {
    approach: 'The report documents GPS waypoint conversion, a local map updated within a 12 m range, voxel-grid downsampling and DBSCAN filtering of point-cloud data. A* operated on an occupancy grid with obstacle masking; Move Base / DWA provided a second navigation workflow.',
    contributions: ['Prepared URDF models with camera and Velodyne sensor visualisation in Gazebo / RViz.', 'Worked on voxel-grid and DBSCAN filtering for the local obstacle representation.', 'Converted GPS waypoints to local map points and explored custom A* navigation.', 'Explored ROSPLAN / PlanSys2 task planning and developed airport-tug CAD concepts.'],
    technologies: ['ROS 1/2', 'Python', 'C++', 'Gazebo', 'RViz', 'URDF', 'MAVROS', 'SLAM', 'Move Base', 'A*', 'DWA', 'Voxel grid', 'DBSCAN'],
    nodes: [
      ['01 / ROBOT & SENSORS', 'URDF, LiDAR & camera', 'The robot model carries simulated sensor interfaces. Camera and Velodyne point-cloud output can be inspected in Gazebo and RViz alongside odometry and transforms.'],
      ['02 / OBSTACLE MAP', 'Voxel grid → DBSCAN → grid', 'The report explores voxel-grid downsampling and DBSCAN filtering. The local obstacle representation is limited to a 12 m range, and an obstacle mask adds clearance in the occupancy grid.'],
      ['03 / GLOBAL ROUTE', 'GPS waypoints → local A*', 'MAVROS provides latitude/longitude waypoints that are converted to local map points. A* uses the occupancy grid to create a route from start to goal and advance through the waypoint sequence.'],
      ['04 / EXECUTION', 'Simulation motion & task planning', 'Gazebo / RViz tests connect planning to the simulated model. Missing encoder feedback and the absence of PID / MPC correction limited long-distance accuracy. ROSPLAN / PlanSys2 exploration encountered solver and integration issues.']
    ],
    flow: 'LiDAR → voxel grid / DBSCAN → local occupancy map + GPS waypoints → A* route → simulated motion',
    stats: [['12 m', 'REPORTED LOCAL-MAP RANGE'], ['A* + DWA', 'NAVIGATION APPROACHES'], ['5 min', 'ORIGINAL SIMULATION RECORDING']],
    rows: [['Robot / sensor model', 'Gazebo / RViz', 'Implemented'], ['Voxel-grid & DBSCAN filtering', 'Point-cloud workflow', 'Explored'], ['GPS-to-local map waypoints', 'MAVROS / A* workflow', 'Implemented'], ['Long-distance motion accuracy', 'Limited feedback', 'Constrained'], ['ROSPLAN / PlanSys2 integration', 'Solver / ARM compatibility', 'Incomplete']],
    scope: 'The 12 m value is a configured local-map range, not a navigation accuracy result. The report focuses mainly on simulation and notes missing encoder feedback, no PID / MPC correction, and task-planner compatibility issues. No benchmark improvement percentage is claimed.',
    lesson: 'A route planner depends on the map, but useful physical motion also needs feedback. The project made the gap between waypoint generation, local obstacle processing and reliable execution explicit.',
    evidence: 'B.Tech report · ROS Path Planning and ROS Simulation, chapters 4–5; uploaded portfolio screenshots and video.',
    gallery: [['assets/ugv-slam.webp', 'SLAM and route visualisation from the uploaded portfolio.'], ['assets/ugv-occupancy.webp', 'Occupancy-map output used to represent free and occupied space.'], ['assets/ugv-waypoints.webp', 'Waypoint / planning view in RViz.'], ['assets/airport-tug.webp', 'Airport-tug mechanical concept developed alongside the navigation work.']],
    video: ['assets/ugv-navigation-demo.mp4', 'Original UGV simulation recording from the uploaded presentation. Silent screen capture; use full screen to inspect the two application views.', 'assets/ugv-gazebo.jpg']
  }
};

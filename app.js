const github = 'https://github.com/sahil86469';
const cv = 'documents/Sahil_Shaik_CV.pdf';
const portfolio = supportingPortfolio;
const projects = {
  moma: {
    label: '01 / ROS 2 MOBILE MANIPULATION', title: 'Omron MoMa: connecting the autonomy stack.',
    summary: 'My UNSW master’s thesis investigated a ROS 2 integration framework for an Omron LD-250 mobile base and TM12-S arm, bringing industrial interfaces, navigation, perception and manipulation into one research workflow.',
    meta: ['UNSW · Master’s thesis · 2026', 'Physical hardware + Gazebo simulation'],
    problem: 'How can a proprietary industrial mobile manipulator use the flexibility of ROS 2 without replacing its native motion controllers? The LD-250 exposes ARCL commands rather than the continuous /cmd_vel interface expected by a conventional navigation stack.',
    approach: 'I built and tested the integration in stages: establish communication, convert sensor data, align frames, generate a navigation path, translate that path into vendor commands, then explore perception and manipulation in simulation.',
    contributions: ['Connected LD-250 state and range data to ROS 2 through ARCL.', 'Converted odometry, LaserScan and point clouds, and aligned the TF tree for RViz and navigation.', 'Tested AMCL and Nav2 path generation, then extracted poses into heading and travel-distance commands.', 'Integrated a Gazebo / MoveIt 2 scene with the TM12-S, gripper and ArUco-depth target localisation.'],
    image: 'assets/moma-platform.jpeg', imageAlt: 'Omron MoMa physical robot in the UNSW laboratory', imageCaption: 'Physical Omron MoMa platform: LD-250 + TM12-S. Photo from my portfolio.',
    technologies: ['ROS 2 Humble', 'Python', 'ARCL', 'Nav2', 'AMCL', 'SLAM Toolbox', 'TF2', 'MoveIt 2', 'Gazebo', 'OpenCV'],
    nodes: [
      ['01 / INDUSTRIAL INTERFACE', 'LD-250 ↔ ARCL bridge', 'The external computer queries the LD-250 for status, odometry and range information through ARCL. Low-level motion and safety interlocks remain with the Omron controller.'],
      ['02 / ROS REPRESENTATION', 'Sensor conversion & TF', 'Custom bridge nodes publish standard ROS 2 odometry, LaserScan and PointCloud2 messages. Frame relationships connect map, odom, base_link and the laser frame; scale and yaw alignment matter for a consistent RViz view.'],
      ['03 / NAVIGATION', 'AMCL → Nav2 → ARCL', 'AMCL localises against the map and Nav2 generates a path. A custom executor reads the planned poses and derives setHeading and move commands. Native GoTo navigation provides a separate, physically tested route to saved goals.'],
      ['04 / MANIPULATION', 'RGB-D → MoveIt 2 → arm', 'The simulated perception pipeline detects an ArUco marker and uses depth to estimate a cart-handle target. MoveIt 2 represents the TM12-S planning scene and arm/gripper workflow. Full physical cart handling remained unvalidated.']
    ],
    flow: 'LD-250 state + LiDAR → ROS 2 bridge → /odom + /scan + TF → AMCL / Nav2 → ARCL execution',
    stats: [['2', 'INTEGRATION APPROACHES: NATIVE + ROS 2'], ['Hardware', 'ARCL DATA & GOTO NAVIGATION'], ['Simulation', 'CART-HANDLING WORKFLOW']],
    rows: [['ARCL communication & sensor conversion', 'Physical robot / RViz', 'Achieved'], ['Saved-goal GoTo navigation', 'Physical LD-250', 'Achieved'], ['AMCL & Nav2 global path', 'ROS 2 / RViz', 'Achieved'], ['Nav2-to-ARCL path execution', 'Physical LD-250', 'Partial'], ['ArUco-depth & arm/gripper sequence', 'Gazebo / MoveIt 2', 'Simulation'], ['Complete cart-handling sequence', 'Physical platform', 'Not achieved']],
    scope: 'The strongest hardware evidence is communication, sensor conversion and native GoTo movement. Nav2 path generation worked; smooth physical path execution was partial. The continuous cart-handling workflow was demonstrated in simulation, with no complete physical grasp-and-navigate validation.',
    lesson: 'The integration boundary was the central engineering challenge: feedback delays, coordinate alignment and different obstacle safety margins affected physical execution. The work supports functional integration claims rather than a numerical accuracy or repeatability benchmark.',
    evidence: 'Thesis report · August 2026 · Results & Discussion, sections 4.1–4.10.',
    resources: [['Project portfolio (PDF)', 'Uploaded project portfolio with engineering visuals', portfolio], ['GitHub profile', 'Explore my robotics and software repositories', github], ['Professional CV', 'Experience, education and technical skills', cv]]
  },
  ugv: {
    label: '02 / AUTONOMOUS NAVIGATION', title: 'UGV navigation: from maps to motion.',
    summary: 'ROS navigation and simulation work during my internship at Edgeforce Solutions, connecting robot models, sensor visualisation, mapping and path planning for an unmanned ground vehicle.',
    meta: ['Edgeforce Solutions · Dec 2023–May 2024', 'Gazebo / RViz development workflow'],
    problem: 'A mobile robot needs a usable model of itself and its surroundings before it can plan a route. The task combined robot description, sensor integration, map generation and obstacle-aware navigation workflows.',
    approach: 'I used Gazebo and RViz to inspect the model and sensing pipeline, explored SLAM and occupancy maps, and worked with Move Base, waypoint following, custom A* planning and DWA / trajectory planning.',
    contributions: ['Prepared URDF models and supported robot component design.', 'Integrated camera and point-cloud sensing into Gazebo and RViz workflows.', 'Worked with A* global planning concepts, Move Base, costmaps and DWA.', 'Connected navigation work with CAD concepts for UGV and aircraft tow-tug components.'],
    image: 'assets/ugv-gazebo.jpg', imageAlt: 'UGV model, camera and sensor point clouds in Gazebo and RViz', imageCaption: 'My Gazebo / RViz development environment, showing model and sensor integration.',
    technologies: ['ROS 1/2', 'Python', 'C++', 'Gazebo', 'RViz', 'URDF', 'SLAM', 'Move Base', 'A*', 'DWA'],
    nodes: [
      ['01 / ROBOT MODEL', 'URDF & simulated platform', 'The robot description defines the chassis, joints and sensor placements. Gazebo provides a repeatable development environment while RViz helps inspect transforms, sensor output and the robot model.'],
      ['02 / ENVIRONMENT', 'Sensing → occupancy map', 'Camera, range and point-cloud information support environment representation. SLAM and occupancy-grid workflows provide the map used for localisation and planning.'],
      ['03 / GLOBAL PLANNING', 'Waypoints & A*', 'A grid-based A* search explores traversable map cells to produce a route toward a goal. Waypoints connect the desired route to the navigation workflow.'],
      ['04 / LOCAL MOTION', 'Move Base & DWA', 'Local costmaps and trajectory planning account for nearby obstacles. DWA evaluates candidate motion commands subject to the robot’s movement constraints.']
    ],
    flow: 'URDF + sensors → SLAM / occupancy map → global route → local costmap / DWA → robot motion',
    stats: [['ROS', 'NAVIGATION WORKFLOW'], ['A* + DWA', 'GLOBAL & LOCAL PLANNING'], ['Gazebo', 'SIMULATION DEVELOPMENT']],
    rows: [['Robot & sensor integration', 'Gazebo / RViz', 'Implemented'], ['Map and path-planning workflows', 'ROS development', 'Implemented'], ['CAD / navigation integration', 'UGV & tow-tug concepts', 'Explored']],
    scope: 'The portfolio evidence shows navigation development, mapping and sensor integration. No standardised benchmark is included here; the screenshots document the engineering workflow rather than a measured production performance claim.',
    lesson: 'Robot modelling, sensor frames and environment representation underpin useful planning. Simulation made it possible to inspect these layers before bringing them together as a navigation workflow.',
    evidence: 'Edgeforce internship work and existing project portfolio.',
    resources: [['Project portfolio (PDF)', 'Navigation screenshots, CAD work and supporting project material', portfolio], ['GitHub profile', 'My software and robotics repositories', github], ['Professional CV', 'Edgeforce internship and core technical experience', cv]]
  },
  isaac: {
    label: '03 / ISAAC SIM & ROBOT INTEGRATION', title: 'Isaac Sim: building a robotics sandbox.',
    summary: 'Personal integration experiments with NVIDIA Isaac Sim, its ROS 2 bridge and a local Isaac Lab workspace, building the foundation for future navigation and mobile-manipulation tasks.',
    meta: ['Personal learning project · 2026', 'Integration experiments / work in progress'],
    problem: 'A simulation environment becomes useful for robotics when its sensor data, commands and coordinate frames can connect reliably to the rest of the robot software stack.',
    approach: 'I configured Isaac Sim and the ROS 2 bridge on Ubuntu, explored topic and transform alignment, and connected a local Isaac Lab installation. I also created an external IsaacNavRL project scaffold for further task development.',
    contributions: ['Launched Isaac Sim with ROS 2 bridge configuration.', 'Explored odometry, laser-scan and velocity-command interfaces.', 'Worked through frame naming and transform consistency issues.', 'Created and imported an IsaacNavRL external project scaffold; further task development remains in progress.'],
    visual: 'isaac', technologies: ['NVIDIA Isaac Sim', 'ROS 2', 'Isaac Lab', 'Python', 'Linux', 'TF', 'GPU simulation'],
    nodes: [
      ['01 / SIMULATION', 'Isaac Sim world & robot', 'Isaac Sim provides the physics and scene environment. These experiments focused on establishing the local software environment and its integration interfaces.'],
      ['02 / COMMUNICATION', 'ROS 2 bridge', 'The bridge links simulation data and robot commands to ROS 2. The integration work explored /odom, /scan and /cmd_vel interfaces and their associated frames.'],
      ['03 / CONSISTENCY', 'Coordinate frames & TF', 'Consistent frame IDs connect sensor data to the robot model. A frame_id and child_frame_id naming issue was corrected during local testing.'],
      ['04 / NEXT STAGE', 'IsaacNavRL task scaffold', 'An external project was created and imported successfully. A custom registered navigation task and a validated mobile-manipulation policy are future development steps.']
    ],
    flow: 'Isaac Sim → ROS 2 bridge → sensor topics + TF ↔ robot software / control interfaces',
    stats: [['Isaac Sim', 'LOCAL ENVIRONMENT SETUP'], ['ROS 2', 'BRIDGE EXPLORATION'], ['IsaacNavRL', 'EXTERNAL PROJECT SCAFFOLD']],
    rows: [['Isaac Sim & ROS 2 environment', 'Local Ubuntu workstation', 'Configured'], ['Isaac Lab import / workspace', 'Local development', 'Achieved'], ['IsaacNavRL external project', 'Scaffold & import', 'Achieved'], ['Custom navigation task / policy', 'Further development', 'In progress'], ['Autonomous pick-and-place task', 'Proposed extension', 'Planned']],
    scope: 'This is an integration and learning project. It does not claim a completed custom Isaac navigation policy, a validated pick-and-place task, or a simulation-to-hardware transfer result. The diagram is conceptual rather than an Isaac Sim screenshot.',
    lesson: 'Environment compatibility, bridge configuration and frame consistency are essential groundwork. Separate Cartpole experiments provide the completed Isaac Lab training example in this portfolio.',
    evidence: 'Local setup and development notes · August–October 2026.',
    resources: [['Isaac Lab training case study', 'Explore the completed Cartpole PPO experiment', '#project=cartpole'], ['GitHub profile', 'My public development profile; no Isaac-specific repository is claimed here', github]]
  },
  cartpole: {
    label: '04 / ISAAC LAB REINFORCEMENT LEARNING', title: 'Cartpole: testing the learning loop.',
    summary: 'A personal PPO training experiment using the Isaac Lab Cartpole environment and RSL-RL, progressing from a short smoke test to a 500-iteration run and checkpoint playback.',
    meta: ['Isaac Lab · Personal experiment · Oct 2026', 'Simulation training / checkpoint playback'],
    problem: 'Before developing a custom robotics task, I needed to verify the training workflow: environment setup, rollout collection, optimisation, logging and policy playback.',
    approach: 'I started with a 10-iteration run, then completed a 500-iteration PPO training run. I compared the logged reward and episode statistics and tested checkpoint playback in the simulator.',
    contributions: ['Configured Isaac Sim / Isaac Lab and the training environment.', 'Ran the PPO / RSL-RL training loop for the built-in Cartpole task.', 'Compared short-run and extended-run logs.', 'Verified policy checkpoint playback in simulation.'],
    visual: 'cartpole', technologies: ['Isaac Lab', 'Isaac Sim', 'PPO', 'RSL-RL', 'Python', 'GPU simulation'],
    nodes: [
      ['01 / ENVIRONMENT', 'Cartpole observations & reward', 'The simulator generates the cart and pole state. A reward function and termination conditions define the built-in learning task.'],
      ['02 / POLICY', 'PPO action selection', 'The policy maps observations to actions. RSL-RL collects rollouts and updates the policy using proximal policy optimisation.'],
      ['03 / ITERATION', 'Rollouts → policy update', 'The training loop repeats simulation, data collection and policy optimisation. A short 10-iteration test was followed by a 500-iteration training run.'],
      ['04 / VALIDATION', 'Logs & checkpoint playback', 'Logged metrics make the two runs inspectable. Loading a policy checkpoint for playback confirms that the trained policy can be executed in the simulation environment.']
    ],
    flow: 'Cartpole state → PPO policy → action → simulator step → reward + next state → policy update',
    stats: [['500', 'TRAINING ITERATIONS'], ['512k', 'REPORTED TRAINING STEPS'], ['4.87', 'FINAL LOGGED MEAN REWARD']],
    rows: [['Mean reward', '−2.04', '4.87'], ['Mean episode length', '79.15', '296.19'], ['Reported success metric', '0.1458', '1.0000'], ['Training steps', '10,240', '512,000']],
    scope: 'These are the reported end-of-run training statistics from local tests on 8 October 2026. The success value is an environment log metric; it is not an independently evaluated generalisation rate or a real-robot result. Two run endpoints are shown, not a continuous learning curve.',
    lesson: 'The experiment established a working train–inspect–playback workflow. A longer run produced better logged task metrics, providing a starting point for more structured evaluation and custom tasks.',
    evidence: 'Local Isaac Lab training logs · 8 October 2026.',
    resources: [['Isaac Sim integration case study', 'See the environment and integration groundwork', '#project=isaac'], ['GitHub profile', 'My robotics and software development profile', github], ['Professional CV', 'Robotics education, skills and project background', cv]]
  },
  perception: {
    label: '05 / RGB-D PERCEPTION', title: 'From image coordinates to a grasp target.',
    summary: 'The perception component of my MoMa thesis: detect a marker near a simulated cart handle and combine image coordinates with depth to estimate a three-dimensional target.',
    meta: ['MoMa thesis component · 2026', 'ArUco + depth · simulation validation'],
    problem: 'An arm planner needs a target in a meaningful coordinate frame, rather than just a location in an image. The perception pipeline must connect a detected cart handle to a 3D pose that can feed a manipulation workflow.',
    approach: 'I used OpenCV / ArUco detection to identify a marker near the cart handle, read the depth around the marker region, and represented the target in the camera frame as a step toward transforming it into the arm planning frame.',
    contributions: ['Detected the ArUco marker boundary and centre in the simulated RGB stream.', 'Used the depth image to estimate marker distance.', 'Connected image observations with a three-dimensional target representation.', 'Inspected the perception and arm planning setup together in simulation.'],
    visual: 'perception', technologies: ['OpenCV', 'ArUco', 'RGB-D', 'ROS 2', 'TF2', 'MoveIt 2', 'Gazebo'],
    nodes: [
      ['01 / INPUT', 'RGB + depth images', 'The camera provides an RGB view and aligned depth information. The test setup used a marker close to the simulated cart handle.'],
      ['02 / DETECTION', 'ArUco boundary & centre', 'The marker detector identifies the boundary and centre in image coordinates. This associates a repeatable visual reference with the target area.'],
      ['03 / LOCALISATION', 'Depth → 3D camera target', 'The depth around the marker region provides the target distance. Combined with the image coordinates and camera model, this supports a target position in the camera frame.'],
      ['04 / PLANNING INTERFACE', 'Frame alignment → arm target', 'The next integration boundary is the transform from camera coordinates into the arm’s planning frame. Physical marker-to-grasp execution still needs calibration, reliable feedback and hardware validation.']
    ],
    flow: 'RGB image + depth → ArUco centre → camera-frame 3D target → frame transform → manipulation planner',
    stats: [['ArUco', 'MARKER DETECTED'], ['0.29–0.33 m', 'REPRESENTATIVE DEPTH READINGS'], ['Simulation', 'TEST ENVIRONMENT']],
    rows: [['Marker boundary & centre', 'Simulated RGB image', 'Detected'], ['Depth-based target distance', 'Simulated depth image', 'Estimated'], ['Complete marker-to-grasp', 'Physical robot', 'Not validated']],
    scope: 'The 0.29–0.33 m range describes representative measured depths, not a localisation error bound. The thesis demonstrates detection and depth estimation in simulation; it does not establish a completed physical grasp or a precision benchmark. The visual here explains the pipeline.',
    lesson: 'Detection is one step in a robotics perception system. Depth alignment, coordinate transforms and a reliable hardware link are equally necessary before a planner can act on the target.',
    evidence: 'Thesis report · August 2026 · sections 3.6 and 4.8.',
    resources: [['Full MoMa case study', 'See how perception fits the complete integration framework', '#project=moma'], ['Project presentation', 'Uploaded project portfolio with robotics visuals', portfolio], ['GitHub profile', 'My robotics and software repositories', github]]
  }
};

Object.assign(projects, additionalProjects);
for (const [id, evidence] of Object.entries(projectEvidence)) Object.assign(projects[id], evidence);

const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
const tabNames = ['overview', 'architecture', 'results', 'resources'];
const tabLabels = ['Overview', 'Architecture', 'Results', 'Visuals & links'];
let activeProject = null;
let activeTab = 'overview';
let opener = null;

function projectVisual(project) {
  if (project.image) return `<img class="case-image ${activeProject === 'moma' ? 'portrait' : ''}" src="${project.image}" alt="${escapeHTML(project.imageAlt)}"><span class="figure-caption">${escapeHTML(project.imageCaption)}</span>`;
  const source = document.querySelector(`#card-${activeProject} .graphic svg`);
  return `<div class="case-visual">${source ? source.outerHTML : ''}</div><span class="figure-caption">${activeProject === 'cartpole' ? 'Schematic of the built-in Cartpole task and two logged run endpoints.' : 'Conceptual pipeline illustration; not a simulator screenshot or live telemetry.'}</span>`;
}

function evidenceGallery(project) {
  if (!project.gallery?.length && !project.video) return '';
  const video = project.video ? `<figure class="demo-video"><video controls playsinline preload="none" poster="${escapeHTML(project.video[2])}" aria-label="${escapeHTML(project.title)} demonstration"><source src="${escapeHTML(project.video[0])}" type="video/mp4">Your browser cannot play this video. <a href="${escapeHTML(project.video[0])}">Open the demo recording</a>.</video><figcaption>${escapeHTML(project.video[1])}</figcaption></figure>` : '';
  return `<section class="evidence-gallery" aria-label="Project evidence gallery"><h3>See the engineering.</h3>${video}<div class="evidence-images">${(project.gallery || []).map(item => `<figure><a href="${escapeHTML(item[0])}" target="_blank" rel="noopener noreferrer" aria-label="Open full image: ${escapeHTML(item[1])}"><img src="${escapeHTML(item[0])}" alt="${escapeHTML(item[1])}" loading="lazy"><span aria-hidden="true">↗</span></a><figcaption>${escapeHTML(item[1])}</figcaption></figure>`).join('')}</div></section>`;
}

function panelContent(project) {
  if (activeTab === 'overview') return `<div class="case-cols"><div><h3>The problem</h3><p>${escapeHTML(project.problem)}</p><h3>My approach</h3><p>${escapeHTML(project.approach)}</p></div><div>${projectVisual(project)}</div></div><h4>My contribution</h4><ul class="contribution-list">${project.contributions.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul><h4>Technologies</h4><div class="tags">${project.technologies.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>`;
  if (activeTab === 'architecture') return `<h3>How the system connects.</h3><p>Select a layer to inspect its role and the integration decisions behind it.</p><div class="flow-summary">${escapeHTML(project.flow)}</div><div class="arch-grid" aria-label="System architecture layers">${project.nodes.map((n,i)=>`<button class="arch-node ${i === 0 ? 'active' : ''}" data-node="${i}" aria-pressed="${i === 0}" aria-controls="architecture-detail"><span class="mono">${escapeHTML(n[0])}</span><b>${escapeHTML(n[1])}</b><span aria-hidden="true">↗</span></button>`).join('')}</div><div class="arch-detail" id="architecture-detail" aria-live="polite"><h4>${escapeHTML(project.nodes[0][1])}</h4><p>${escapeHTML(project.nodes[0][2])}</p></div>`;
  if (activeTab === 'results') {
    const isRL = activeProject === 'cartpole';
    return `<h3>${isRL ? 'Two runs. A working learning loop.' : 'What was tested. What worked.'}</h3><p>${escapeHTML(project.evidence)}</p><div class="result-grid">${project.stats.map(s=>`<div class="result-stat"><strong>${escapeHTML(s[0])}</strong><span>${escapeHTML(s[1])}</span></div>`).join('')}</div>${isRL ? '<div class="data-bars" aria-label="Reported success metric: 0.1458 after 10 iterations; 1.0000 after 500 iterations"><div class="data-run"><strong>0.1458</strong><span>10-ITERATION RUN</span><div class="bar-track"><i style="--width:14.58%"></i></div></div><div class="data-run"><strong>1.0000</strong><span>500-ITERATION RUN</span><div class="bar-track"><i style="--width:100%"></i></div></div></div>' : ''}<table class="results-table"><caption class="skip">${isRL ? 'Comparison of two Isaac Lab Cartpole training logs' : 'Project validation outcomes'}</caption><thead><tr>${(isRL ? ['METRIC','10 ITERATIONS','500 ITERATIONS'] : ['COMPONENT','TEST CONTEXT','OUTCOME']).map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${project.rows.map(r=>`<tr><td>${escapeHTML(r[0])}</td><td>${escapeHTML(r[1])}</td><td>${isRL ? escapeHTML(r[2]) : `<span class="state ${/Partial|Not|progress|Planned|Incomplete|Constrained|Exploratory/.test(r[2])?'partial':''}">${escapeHTML(r[2])}</span>`}</td></tr>`).join('')}</tbody></table><div class="scope-note"><b>Scope & interpretation</b>${escapeHTML(project.scope)}</div><h4>Engineering takeaway</h4><p>${escapeHTML(project.lesson)}</p>`;
  }
  return `<div class="case-cols"><div><h3>Explore the supporting work.</h3><p>Project visuals and relevant links, alongside the scope of the evidence.</p><p>${escapeHTML(project.evidence)}</p><div class="scope-note"><b>Evidence context</b>${escapeHTML(project.scope)}</div></div><div>${projectVisual(project)}</div></div>${evidenceGallery(project)}<div class="resources">${project.resources.map(r=>`<a class="resource-link" href="${escapeHTML(r[2])}" ${!r[2].startsWith('#') ? 'target="_blank" rel="noopener noreferrer"' : ''}><span><b>${escapeHTML(r[0])}</b><small>${escapeHTML(r[1])}</small></span><span aria-hidden="true">↗</span></a>`).join('')}</div><button class="button primary copy-link" style="margin-top:25px">Copy project link <span aria-hidden="true">↗</span></button><p class="copy-feedback" aria-live="polite" style="margin-top:10px;font-size:10px"></p>`;
}

function renderProject() {
  const project = projects[activeProject];
  dialogContent.innerHTML = `<div class="dialog-intro"><div class="eyebrow">${escapeHTML(project.label)}</div><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p>${escapeHTML(project.summary)}</p><div class="dialog-meta">${project.meta.map(m=>`<span><i class="status-dot"></i>${escapeHTML(m)}</span>`).join('')}</div></div><div class="dialog-tabs" role="tablist" aria-label="Case study sections">${tabNames.map((name,i)=>`<button id="tab-${name}" data-tab="${name}" role="tab" aria-selected="${activeTab === name}" tabindex="${activeTab === name ? 0 : -1}" aria-controls="case-panel">${tabLabels[i]}</button>`).join('')}</div><div class="case-panel" id="case-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-${activeTab}">${panelContent(project)}</div>`;
  dialogContent.querySelectorAll('[data-tab]').forEach(button => button.addEventListener('click',()=>selectTab(button.dataset.tab)));
  bindTabKeyboard(dialogContent.querySelector('.dialog-tabs'), button=>selectTab(button.dataset.tab));
  dialogContent.querySelectorAll('[data-node]').forEach(button => button.addEventListener('click',()=>{
    dialogContent.querySelectorAll('[data-node]').forEach(node=>{node.classList.toggle('active',node === button);node.setAttribute('aria-pressed',String(node === button));});
    const node = project.nodes[Number(button.dataset.node)];
    document.getElementById('architecture-detail').innerHTML=`<h4>${escapeHTML(node[1])}</h4><p>${escapeHTML(node[2])}</p>`;
  }));
  dialogContent.querySelector('.copy-link')?.addEventListener('click',async()=>{
    const feedback=dialogContent.querySelector('.copy-feedback');
    try { await navigator.clipboard.writeText(location.href); feedback.textContent='Project link copied.'; }
    catch { feedback.textContent='Copy the address from your browser to share this project.'; }
  });
}

function selectTab(name) {
  if (!tabNames.includes(name)) return;
  const previousScroll = dialog.scrollTop;
  activeTab = name;
  history.replaceState(null,'',`#project=${activeProject}${name === 'overview' ? '' : `&tab=${name}`}`);
  renderProject();
  document.getElementById(`tab-${name}`).focus({preventScroll:true});
  dialog.scrollTop=Math.min(previousScroll,dialog.scrollHeight-dialog.clientHeight);
}

function bindTabKeyboard(tablist, onChange) {
  tablist.addEventListener('keydown',event=>{
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    const tabs=[...tablist.querySelectorAll('[role="tab"]')];
    const current=tabs.indexOf(document.activeElement);
    if(current<0) return;
    event.preventDefault();
    const index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(current+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    onChange(tabs[index]);
  });
}

function openProject(id, tab='overview', trigger=null) {
  if (!projects[id]) return;
  if (!dialog.open) opener = trigger || document.activeElement;
  activeProject=id; activeTab=tabNames.includes(tab)?tab:'overview';
  renderProject();
  if (!dialog.open) {dialog.showModal();document.body.classList.add('modal-open');}
  dialog.scrollTop=0;
}

function closeProject(updateURL=true) {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  if (dialog.open) dialog.close();
  document.body.classList.remove('modal-open');
  activeProject=null;
  if(updateURL) history.replaceState(null,'','#projects');
  if(opener && opener.isConnected && opener !== document.body) opener.focus({preventScroll:true});
}

function route() {
  const params=new URLSearchParams(location.hash.slice(1));
  const id=params.get('project');
  if(id && projects[id]) openProject(id,params.get('tab')||'overview');
  else if(dialog.open) closeProject(false);
}

document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.project;
  history.pushState(null,'',`#project=${id}`);
  openProject(id,'overview',button);
}));
document.querySelector('.close-dialog').addEventListener('click',()=>closeProject());
dialog.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeProject();}});
window.addEventListener('hashchange',route);
window.addEventListener('popstate',route);

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(filter=>{const active=filter===button;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});
  let count=0;
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&!card.dataset.categories.split(' ').includes(button.dataset.filter);if(!card.hidden)count++;});
  document.querySelector('.filter-count').textContent=`${count} PROJECT${count===1?'':'S'}`;
}));

const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.querySelector('span').textContent=open?'−':'+';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.querySelector('span').textContent='+';}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.querySelector('span').textContent='+';menu.focus();}});

const systemNotes={navigation:['From a planned path to physical motion.','Nav2 plans a route; an ARCL bridge translates it for the LD-250.'],perception:['A meaningful target starts with perception.','RGB-D and ArUco detection locate a cart-handle target in simulation.'],manipulation:['Connect the target to the planning scene.','MoveIt 2 represents the TM12-S arm and the simulated gripper workflow.']};
function setLayer(button){
  document.querySelectorAll('[data-layer]').forEach(tab=>{const selected=button===tab;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
  const note=systemNotes[button.dataset.layer];
  const panel=document.getElementById('system-note');panel.innerHTML=`<b>${note[0]}</b><span>${note[1]}</span>`;panel.setAttribute('aria-labelledby',button.id);
  document.querySelector('.robot-scene').dataset.focus=button.dataset.layer;
  document.querySelector('.visual-head>span:last-child').textContent=`0${Object.keys(systemNotes).indexOf(button.dataset.layer)+1} / 03`;
  button.focus({preventScroll:true});
}
document.querySelectorAll('[data-layer]').forEach(button=>button.addEventListener('click',()=>setLayer(button)));
bindTabKeyboard(document.querySelector('.system-switch'),setLayer);
route();

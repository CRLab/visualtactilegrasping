function addPointCloudViewer(depth_cloud_filepath, tactile_cloud_filepath, container_id) {
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
    let container;
    let camera, controls, scene, renderer;
    init();
    animate();
    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x000000 );
        camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.01, 40 );
        camera.position.x = 0.4;
        camera.position.z = -2;
        camera.up.set(0,0,1);
        controls = new THREE.OrbitControls( camera );

        scene.add( camera );
        container = document.getElementById(container_id);
        renderer = new THREE.WebGLRenderer( { antialias: true, canvas: container } );

        scene.background = new THREE.Color( 0xffffff );

        let loader = new THREE.PCDLoader();
        loader.load(depth_cloud_filepath, function ( mesh ) {
            mesh.material.color.setHex( 0xff5500 );
            mesh.material.size = 0.05;
            scene.add( mesh );
            let center = mesh.geometry.boundingSphere.center;
            controls.target.set( center.x, center.y, center.z);
            controls.update();
        } );
        loader.load(tactile_cloud_filepath, function ( mesh ) {
            mesh.material.color.setHex( 0x0055ff );
            mesh.material.size = 0.05;
            scene.add( mesh );
        } );
        window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {
        // camera.aspect = window.innerWidth / window.innerHeight;
        // camera.updateProjectionMatrix();
        // renderer.setSize( window.innerWidth, window.innerHeight );
    }
    function animate() {
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
    }
}

function addPLYViewer(ply_filepath, container_id)  {
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
    let container;
    let camera, controls, scene, renderer, hemiLight, dirLight;
    init();
    animate();
    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x000000 );
        camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.01, 40 );
        camera.position.x = 0.4;
        camera.position.z = -2;
        camera.up.set(0,0,1);
        controls = new THREE.OrbitControls( camera );
        // hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
        // hemiLight.color.setHSL( 0.6, 1, 0.6 );
        // hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
        // hemiLight.position.set( 0, 50, 0 );
        // scene.add( hemiLight );
        //
        // dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
        // dirLight.color.setHSL( 0.1, 1, 0.95 );
        // dirLight.position.set( -1, 1.75, 1 );
        // dirLight.position.multiplyScalar( 30 );
        // scene.add( dirLight );

        scene.add( camera );
        container = document.getElementById(container_id);
        renderer = new THREE.WebGLRenderer( { antialias: true, canvas: container } );

        scene.background = new THREE.Color( 0xffffff );

        scene.add( new THREE.HemisphereLight( 0xaaaaaa, 0x444444 ) );
        let light = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        let loader = new THREE.PLYLoader();
        loader.load(ply_filepath, function ( geometry ) {
            var material = new THREE.MeshStandardMaterial( {
                color: new THREE.Color().setHSL( Math.random(), 1, 0.75 ),
                roughness: 0.5,
                metalness: 0,
                flatShading: true
            } );
            let mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );

            let center = mesh.geometry.boundingSphere.center;
            controls.target.set( center.x, center.y, center.z);
            controls.update();
        } );

        window.addEventListener( 'resize', onWindowResize, false );
    }
    function onWindowResize() {

        // camera.aspect = container.innerWidth / container.innerHeight;
        // camera.updateProjectionMatrix();
        // renderer.setSize( window.innerWidth, window.innerHeight );
    }
    function animate() {
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
    }
}

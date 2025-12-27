const studyGuideData = {
    'Mortar Knowledge': {
        '120mm': { 
            title: '120mm', 
            info: 'Min | Max Range: 200m to 7200m <br> Nomenclature: M120 (ground) | M121 (carrier) <br> Cannon: M298 (110 lbs) <br> Baseplate: M9 (136 lbs) <br> Bipod: M190 (ground) | M191 (carrier) (70 lbs total) <br> Rate of Fire: 16 rounds for 1 minute, 4 rounds per minute sustained', 
            imageUrl: 'https://placehold.co/400x300/10b981/e2e8f0?text=120MM+MORTAR+SYSTEM' 
        },
        '81mm': { 
            title: '81mm', 
            info: 'Min | Max Range: 80m to 5608m <br> Nomenclature: M252A1 <br> Cannon: M252A1 (31 lbs) <br> Baseplate: M3A1 (23 lbs) <br> Bipod: M177A1 <br> Rate of Fire: 30 rounds for 1 minute, 15 rounds per minute sustained', 
            imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=81MM+MORTAR+SYSTEM' 
        },
        '60mm': { 
            title: '60mm', 
            info: 'Min | Max Range: Hand Held: 70m to 1340m | Conventional: 70m to 3490m <br> Nomenclature: M224A1 <br> Cannon: M225 (13 lbs) <br> Baseplate: M7A1 (circular, 9.2 lbs) | M8 (rectangular, 3.7 lbs) <br> Bipod: M67 (2.9 lbs) <br> Rate of Fire: 30 rounds for 1 min, 20 rounds per minute sustained', 
            imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=60MM+MORTAR+SYSTEM' 
        },
        'Round Types': { 
            title: 'Rounds', 
            info: 'HE: High Explosive <br> WP: White Phosphorus <br> Illumination <br> IR Illum', 
            imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=MORTAR+ROUND+TYPES' 
        },
        'Fuse Types': { 
            title: 'Fuses', 
            info: 'PRX: Proximity (air burst 3 to 13 feet above ground) <br> IMP: Impact (burst on contact) <br> DLY: Delay (0.05 seconds after impact) <br> Timed: Used to set for illumination rounds', 
            imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=MORTAR+FUSE+TYPES' 
        },
        'Sheafs': { 
            title: 'Sheafs', 
            info: 'Converged <br> Linear <br> Parallel <br> Open <br> Special', 
            imageUrl: 'images/sheaves.png' 
        },
        'Formations': { 
            title: 'Formations', 
            info: 'Lazy W <br> Parallel <br> Diamond <br> Terrain',
            imageUrl: 'images/formations.png' 
        },
        'Missions': { 
            title: 'Missions', 
            info: 'Grid <br> Shift <br> Polar <br> Illumination <br> Coordinated Illumination <br> Immediate Suppression <br> Time On Target <br> Final Protective Fire (FPF) <br> Search <br> Traverse <br> Search and Traverse <br> Close Support Fires <br> Counter Fires <br> Interdiction Fires <br> Harassment Fires <br> Deception Fires', 
            imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=MORTAR+MISSIONS' 
        },
        'Tables': { 
            title: 'Tables', 
            info: '1 Written Test and Gunners Exam <br> 2 Call For Fire (CFF) <br> 3 Deliberate, Hasty, Hip-Shoot, Movement/Maneuver <br> 4 Dry Fire, Direct Lay, Direct Alignment <br> 5 Analog Qualifications <br> 6 Digital Qualification', 
            imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=TRAINING+TABLES' 
        },
        'Gunners Exam Events': { 
            title: 'Gunners Exam Events', 
            info: 'Reciprocal Lay <br> Referral/Re-align Aiming Post <br> Small Corrections <br> Large Corrections', // Corrected typos and completed list
            imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=GUNNERS+EXAM+EVENTS' 
        },
        'Pre Mount Safety Checks': { 
            title: 'Pre Mount Safety Checks', 
            info: 'Breach cap tightened <br> Firing pin inserted <br> Turntable locked <br> Skunk line (Firing Plunger Cable) <br> Traverse knob locked <br> Bipod pins inserted (arrows downward) <br> Hand wheel tightened <br> Hatches locked <br> Mask and overhead clearance', // Corrected typo 'Bad hand'
            imageUrl: 'https://placehold.co/400x300/111111/e2e8f9?text=SAFETY+CHECKS' 
        },
    }, 
    
  'Land Nav': {
        'Major': { 
            title: 'Major Terrain Features', 
            info: 'Hill <br> Valley <br> Ridge <br> Saddle <br> Depression', 
            imageUrl: 'images/major.png' 
        },
        'Supplementary': { 
            title: 'Minor Terrain Features', 
            info: 'Cut <br> Fill', 
            imageUrl: 'images/supplementary.png' 
        },
        'Minor': { 
            title: 'Supplementary Features', 
            info: 'Spur <br> Draw <br> Cliff', 
            imageUrl: 'images/minor.png' 
        },
        'Map Colors': { 
            title: 'Standard Map Colors', 
            info: 'Blue: Water features <br> Green: Vegetation <br> Brown: Cultivated land and Contour Lines <br> Black: Man-made structures/areas <br> Red: Urban areas and highly defined lines <br> Red-Brown: Used for combined contour lines and cultural features.', 
            imageUrl: 'https://placehold.co/400x300/a3e635/1f2937?text=MAP+COLOR+LEGEND' 
        },
        'Types Norths': { 
            title: 'The Three Norths', 
            info: '**Grid North**: North as depicted by the vertical grid lines on a map (used for plotting). <br> **Magnetic North**: Points to the magnetic field surrounding the North Pole (where a compass points). <br> **True North**: Points to the North Pole', 
            imageUrl: 'https://placehold.co/400x300/fcd34d/1f2937?text=TRUE+GRID+MAGNETIC' 
        },
     
        'Back Azimuth': { 
            title: 'Back Azimuth Calculation', 
            info: 'The opposite direction of a given azimuth. Used to reverse course or verify a position. <br> If the azimuth is **less than 180°**, **add 180°**. <br> If the azimuth is **more than 180°**, **subtract 180°**. <br> Examples: 200° - 180° = 20° | 100° + 180° = 280°', 
            imageUrl: 'https://placehold.co/400x300/991b1b/1f2937?text=BACK+AZIMUTH+CALC' 
        },
          'Contour lines ': { 
            title: '', 
            info: 'Index <br> Supplemnetary <br> Intermediate', 
            imageUrl: 'images/contourlines.png' 
        },
    },

    'OPS': {
        '5P': { title: '5 Principals of Patrolling', info: 'Planning <br> Reconnaissance <br> Security <br> Control <br> Common Sense', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=5s' }, 
        'OCOKA': { title: 'OCOKA', info: 'Observation and fields of fire <br> Cover and concealment <br> Obstacles <br> Key Terrain <br> Avenues of approachs', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=OCOKA' }, 
        'GOTWA': { title: 'GOTWA', info: 'Going <br> Others going with you <br> Time of return <br> What to do if you dont return <br> Actions on contact', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=GOTWA' }, 
        'SPOT REPORT': { title: 'Spot Report', info: 'Date / time group <br> Reporting unit / method of observation <br> Size <br> Activity <br> Location <br> Unit / Uniform <br> Time <br> Equipment <br> Assesment <br> Narrative Authentication', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=DRSALUTEANA' }, 
        'LACE REPORT': { title: 'Lace Report', info: 'Liquid <br> Ammunition <br> Casualties <br> Equipment', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=LACE REPORT' }, 
        'MIST REPORT': { title: 'Mist Report', info: 'Mechanism of Injury <br> Injury Type <br> Signs / Symptoms <br> Treatment given', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=MIST REPORT' }, 
        'SLLS': { title: 'SLLS', info: 'Stop <br> Look <br> Listen <br> Smell', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=' }, 
        'TLPS': { title: 'Troop Leading Procedures', info: 'Recive the mission <br> Issue the WARNO <br> Make a tentative plan <br> Initiate movemement / rehearsals <br> Conduct reconnaissance <br> Complete plan <br> Issue the OPORD <br> Supervise and Refine', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=TLP' }, 
        'TTLODAC': { title: 'TTLODAC', info: 'Target <br> Trigger <br> Location <br> Observer <br> Delivery System <br> Attack guidance <br> Communications', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=TTLODAC' }, 
        '5P OPORD': { title: '5 Paragraph OPORD', info: 'Situation <br> Mission <br> Execution <br> Sustainment <br> Command and signals', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=5POPORD' }, 
        '4 Marksmenship Fundamnetals': { title: '4 Fundamentals of Marksmanship', info: 'Steady firing position <br> Aiming and sight picture <br> Breath control <br> Trigger squeeze', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=Fundamentals' }, 
        '6 Eelements of Call for fire': { title: '6 Elements of Call for Fire', info: 'Observation ID <br> WARNO <br> Target location <br> Target description <br> Method of engagment <br> Method of fire and control', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=6' }, 
        '8 Cycles of Fucntion': { title: '', info: 'Feeding <br> Chambering <br> Locking <br> Firing <br> Unlocking <br> Extracting <br> Ejecting <br> Cocking', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=8' }, 
        '9 line Medavac': { title: '9 Line', info: '1. Location: Minimum 8-digit grid of pickup site <br> 2. Frequency/call-sign: Your frequency and call-sign/suffix <br> 3. Patients by precedence: A=Urgent, B=Priority, C=Routine, D=Convenience <br> 4. Equipment required: A=None, B=Hoist, C=Extraction equipment, D=Ventilator <br> 5. Patients by type: A=Litter, B=Ambulatory <br> 6. Security at pickup site: N=No enemy in area, P=Possible enemy in area, E=Enemy in area, X=Escort <br> 7. Method of marking: A=Panels, B=Pyro signal, C=Smoke, D=None, E=Other <br> 8. Patient nationality: A=US military, B=US civilian, C=Non-US military, D=Non-US civilian, E=EPW <br> 9. CBRN/terrain description: C=Chemical, B=Biological, R=Radioactive, N=Nuclear (description of terrain at site)', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=9LINE' }, 
        '5s for POWS': { title: '', info: 'Search <br> Silence <br> Segregate <br> Safeguard <br> Speed to Rear', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=5' }, 
        '3 Movments Techniques': { title: '', info: '', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=' }, 
        '2 Types of Bounding': { title: '', info: '', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=' }, 
        '3 Types of Recon': { title: 'Recon', info: '1 Ground <br> Aerial <br> Map', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=' }, 
},


    'Acronyms': {
        'RED': { title: 'RED', info: 'Risk Estimated Disatnce', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=RED' }, 
        'LDA': { title: 'LDA', info: 'Linear Danger Area', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=LDA' },
        'ODA': { title: 'ODA', info: 'Open Danger Area', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=ODA' },
        'LOA': { title: 'LOA', info: 'Limit of Advance', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=LOA' },
        'LSCO': { title: 'LSCO', info: 'Large Scale Combat Operations', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=LSCO' },
        'COIN': { title: 'COIN', info: 'Counterinsurgency', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=COIN' },
        'TCCC': { title: 'TCCC', info: 'Tactical Combat Casualty Care', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=TCCC' },
        'TAA': { title: 'TAA', info: 'Tactical Assembly Area', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=TAA' },
        'LARS': { title: 'LARS', info: 'Left Add, Right Subtract', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=LARS' },
        'RALS': { title: 'RALS', info: 'Right Add, Left Subtract', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=RALS' },
        'BDA': { title: 'BDA', info: 'Battle Damage Assessment', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=BDA' },
        'WARNO': { title: 'WARNO', info: 'Warning Order', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=WARNO' },
        'OPORD': { title: 'OPORD', info: 'Operations Order', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=OPORD' },
        'MFP': { title: 'MFP', info: 'Mortar Firing Point', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=MFP' },
        'FDC': { title: 'FDC', info: 'Fire Direction Center', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=FDC' },
        'FFE': { title: 'FFE', info: 'Fire for Effect', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=FFE' },
        'PMCS': { title: 'PMCS', info: 'Preventative Maintenance Checks and Services', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=PMCS' },
        'MFCS': { title: 'MFCS', info: 'Mortar Fire Control System', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=MFCS' },
        'JBC-P': { title: 'JBC-P', info: 'Joint Battle Command - Platform', imageUrl: 'https://placehold.co/400x300/059669/e2e8f0?text=JBC-P' },
        'PACE': { title: 'PACE', info: 'Primary, Alternative, Contigency, Emergency', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=PACE' },
    },


    'Battle Drills': {
        '1': { title: 'Drill 1: React to Direct Fire', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=1' },
        '2': { title: 'Drill 2: Conduct a Platoon Attack', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=2' },
        '3': { title: 'Drill 3:  Break Contact', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=3' },
        '4': { title: 'Drill 4: React to an Ambush', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=4' },
        '5': { title: 'Drill 5:  Knock out a Bunker', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=5' },
        '6': { title: 'Drill 6: Enter and Clear a  room ', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=6' },
        '7': { title: 'Drill 7: Enter a Treanch to secure a foothold ', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=7' },
        '8': { title: 'Drill 8: Conduct the initial Breach of a Mined Obstacle ', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=8' },
        '9': { title: 'Drill 9: React to Indirect Fire ', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=9' },
        '10': { title: 'Drill 10: React to Aircraft while Dismounted ', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=10' },
        '11': { title: 'Drill 11: Establish Security at the Halt', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=11' },
        '12': { title: 'Drill 12: Conduct A Hasty Attack', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=12' },
        '13': { title: 'Drill 13: Dismount a Vehicle under Direct Fire', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=13' },
        '14': { title: 'Drill 14: React to a chemical attack ', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=14' },
        '15': { title: 'Drill 15: React to a chemical agent attack', info: '', imageUrl: 'https://placehold.co/400x300/1f2937/e2e8f0?text=15' },
    },
    
};

const mainNavContainer = document.getElementById('main-nav');
const subNavContainerDiv = document.getElementById('sub-nav-container');
const subNavDiv = document.getElementById('sub-nav');
const currentSectionTitle = document.getElementById('current-section-title');
const contentDisplay = document.getElementById('content-display');
const feedbackForm = document.getElementById('feedbackForm');
const captchaQuestion = document.getElementById('captchaQuestion');
const formStatus = document.getElementById('formStatus');

// **!!! IMPORTANT: REPLACE THIS WITH YOUR DISCORD WEBHOOK URL !!!**
// Note: This URL must be kept in the JS file as it's part of the fetch logic.
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1435806943812780164/MfjsECMOSksuchvfrpEktAJewoQ6xm7FiNDg9gz2QyqIOyXG6q22RblccWB5fvNDCqju'; 

let activeSection = null;
let initialContentHTML = ''; // RENAMED: Use 'initialContentHTML' for clarity
let captchaAnswer = 0; // Stores the correct answer

// --- CAPTCHA & FORM LOGIC (No changes needed) ---

/**
 * Generates a simple addition CAPTCHA (e.g., 5 + 3) and updates the UI.
 */
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    captchaAnswer = num1 + num2;
    captchaQuestion.textContent = `CAPTCHA: ${num1} + ${num2} = ?`;
    document.getElementById('captchaInput').value = ''; // Clear input
}

/**
 * Handles form submission, performs CAPTCHA validation, and sends data to the Discord webhook.
 * @param {Event} event - The form submission event.
 */
async function handleFormSubmit(event) {
    event.preventDefault();
    const submitButton = feedbackForm.querySelector('button[type="submit"]');
    
    // 1. Validate CAPTCHA
    const userInput = parseInt(document.getElementById('captchaInput').value);
    if (userInput !== captchaAnswer) {
        formStatus.textContent = 'ERROR: Anti-Spam Protocol Failed. Incorrect Answer.';
        formStatus.className = 'text-red-500 font-bold text-center';
        generateCaptcha(); // Regenerate CAPTCHA on failure
        return;
    }

    // 2. Prepare Data
    const infoRequest = document.getElementById('infoRequest').value;
    if (!infoRequest.trim()) {
         formStatus.textContent = 'ERROR: Mission critical field cannot be empty.';
         formStatus.className = 'text-red-500 font-bold text-center';
         return;
    }

    const payload = {
        username: "MTRS Requestt",
        avatar_url: "https://i.imgur.com/vH97NfH.png", // Optional: Use a cool icon URL
        embeds: [
            {
                title: "New Request",
                description: infoRequest.substring(0, 2048), // Discord embed limit is 2048
                color: 3066993, // Green color code
                fields: [
                    {
                        name: "Source Page",
                        value: window.location.href,
                        inline: true
                    },
                    {
                        name: "Timestamp (UTC)",
                        value: new Date().toUTCString(),
                        inline: true
                    }
                ]
            }
        ]
    };

    // 3. Submit to Discord
    submitButton.disabled = true;
    submitButton.textContent = 'UPLOADING DATA...';
    formStatus.textContent = 'Uploading data to command server...';
    formStatus.className = 'text-yellow-400 font-bold text-center';

    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            formStatus.textContent = 'SUCCESS: Request Sent.';
            formStatus.className = 'text-green-500 font-bold text-center';
            feedbackForm.reset();
        } else {
            formStatus.textContent = `CRITICAL FAILURE: Discord Hook Error ${response.status}. See console.`;
            formStatus.className = 'text-red-500 font-bold text-center';
            console.error('Discord Webhook Error:', response);
        }
    } catch (error) {
        formStatus.textContent = 'NETWORK ERROR: Unable to reach command server.';
        formStatus.className = 'text-red-500 font-bold text-center';
        console.error('Fetch Error:', error);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'SUBMIT REQUEST';
        generateCaptcha(); // Regenerate for next submission attempt
        setTimeout(() => {
            formStatus.textContent = ''; // Clear status after a delay
        }, 10000);
    }
}

// --- NAVIGATION & CONTENT LOGIC ---

/**
 * Stores the initial content message (now the centered image) to be reused when switching sections.
 */
function storeInitialContent() {
    // ⚠️ Updated to find the initial image container (assuming ID is initial-image-container)
    const initialContentElement = document.getElementById('initial-image-container');
    if (initialContentElement) {
        // Save the HTML structure that displays the initial image
        initialContentHTML = initialContentElement.outerHTML; 
        
        // Remove the element from the display immediately after saving it
        // so it's only rendered once by the HTML, and then injected by JS later.
        // If you prefer to keep it visible until the first click, skip this line.
        // initialContentElement.remove(); 
    } else {
        // Fallback/Warning if the initial image container is not found
        console.warn("MTRS Study Hub: Initial image container not found. Content will be empty until a section is selected.");
    }
}

/**
 * Renders the main navigation buttons based on the studyGuideData keys.
 */
function renderMainNav() {
    storeInitialContent(); 
    
    // Clear any existing buttons
    mainNavContainer.innerHTML = ''; 

    Object.keys(studyGuideData).forEach(section => {
        const button = document.createElement('button');
        button.className = 'nav-btn';
        button.textContent = section;
        button.setAttribute('data-section', section);
        button.onclick = (event) => {
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');
            showSubNav(section);
        };
        mainNavContainer.appendChild(button);
    });

    // Add the special 'Generator' link (Separate Page)
    const generatorLink = document.createElement('a');
    generatorLink.href = 'generator.html'; 
    generatorLink.className = 'nav-btn generator-btn'; 
    generatorLink.textContent = 'Generator';
    mainNavContainer.appendChild(generatorLink);

    // Add the special 'Flash Cards' link (Separate Page)
    const flashcardsLink = document.createElement('a');
    flashcardsLink.href = 'flashcards.html'; 
    flashcardsLink.className = 'nav-btn generator-btn'; 
    flashcardsLink.textContent = 'Flash Cards';
    mainNavContainer.appendChild(flashcardsLink);
}

/**
 * Shows the sub-navigation menu for the selected main section.
 * @param {string} section - The key of the main section selected.
 */
function showSubNav(section) {
    activeSection = section;
    // Update title with the new icon and title structure
    currentSectionTitle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 sm:w-7 sm:h-7 text-green-500">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
        <span>${section} :: </span>
    `;
    subNavDiv.innerHTML = ''; 
    subNavContainerDiv.classList.remove('hidden');
    
    // ⚠️ Updated to use the stored initial content (the image)
    contentDisplay.innerHTML = initialContentHTML; 

    Object.keys(studyGuideData[section]).forEach(subsection => {
        const button = document.createElement('button');
        button.className = 'sub-nav-btn';
        button.textContent = subsection;
        button.onclick = (event) => {
            document.querySelectorAll('.sub-nav-btn').forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');
            displayContent(section, subsection);
        };
        subNavDiv.appendChild(button);
    });
    // Scroll to the sub-nav section for better UX on smaller screens
    subNavContainerDiv.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Displays the content (image and text) for the selected subsection.
 * @param {string} section - The key of the main section.
 * @param {string} subsection - The key of the subsection selected.
 */
function displayContent(section, subsection) {
    const content = studyGuideData[section][subsection];

    // FIX APPLIED HERE: Added 'w-full h-auto object-cover' to the img class. 
    // 'w-full' ensures it takes the full width of the parent (lg:w-1/2).
    // 'h-auto' maintains aspect ratio. 'object-cover' or 'object-contain' is usually preferred 
    // for responsiveness; 'object-cover' will make it fill the area while potentially clipping.
    // Given the placeholder images, 'object-contain' might be better to show the full image, but
    // 'object-cover' is often used for full-size visual impact. Sticking to 'object-contain' for max visibility.
    contentDisplay.innerHTML = `
        <div class="flex flex-col lg:flex-row items-start lg:space-x-8 w-full p-2">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0 relative">
                <img src="${content.imageUrl}" 
                     alt="${content.title} Illustration" 
                     class="content-image w-full h-full object-contain"
                     onerror="this.onerror=null; this.src='https://placehold.co/400x300/dc2626/e2e8f0?text=IMAGE+CORRUPT';"
                >
                <div class="absolute inset-0 rounded-xl pointer-events-none" style="box-shadow: inset 0 0 10px rgba(16, 185, 129, 0.5);"></div>
            </div>
            <div class="lg:w-1/2 w-full text-gray-200">
                <h3 class="text-2xl sm:text-4xl font-extrabold text-green-300 mb-4 border-b-2 border-green-700 pb-2 font-orbitron">
                    <span class="text-green-500/80">//</span> ${content.title}
                </h3>
                <p class="text-base sm:text-lg leading-relaxed text-gray-300">${content.info}</p>
            </div>
        </div>
    `;
    
    // ⚠️ Updated the ID to target the new initial image container
    // This step is critical to remove the initial content when actual study content loads.
    const initialWrapper = document.getElementById('initial-image-container');
    if(initialWrapper) {
        initialWrapper.remove();
    }
    
    // Scroll to the content for better UX on smaller screens
    contentDisplay.scrollIntoView({ behavior: 'smooth' });
}

// --- INITIALIZATION ---

/**
 * Initializes the application after the DOM is fully loaded.
 */
function init() {
    // Check if required elements exist before proceeding
    if (mainNavContainer && feedbackForm) {
        renderMainNav();
        generateCaptcha(); // Initialize CAPTCHA on load
        feedbackForm.addEventListener('submit', handleFormSubmit); // Attach submit listener
    } else {
        console.error("MTRS Study Hub: Critical DOM elements missing. Cannot initialize script.");
    }
}

// Initialize the app on DOM load
document.addEventListener('DOMContentLoaded', init);

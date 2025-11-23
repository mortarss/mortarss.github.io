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
        'Sheaves - Converged': { 
            title: 'Converged Sheaf', 
            info: 'A pattern where the individual mortars are sighted to impact a single, specific **point** on the target. Used for maximum destruction or neutralization of small, critical targets.', 
            imageUrl: 'images/imConverged.png' 
        },
        'Sheaves - Linear': { 
            title: 'Linear Sheaf', 
            info: 'A pattern where the mortars impact along a **straight line**. Used to cover a trench, road, or narrow column of enemy troops. The impacts are distributed side-by-side.', 
            imageUrl: 'images/Linear.png' 
        },
        'Sheaves - Parallel': { 
            title: 'Parallel Sheaf', 
            info: 'A pattern where the mortars impact in a series of **parallel lines**. Used for comprehensive coverage of a rectangular or square area target.', 
            imageUrl: 'images/Parallel.png' 
        },
        'Sheaves - Open': { 
            title: 'Open Sheaf', 
            info: 'A pattern used to cover a wide, **irregularly shaped area**. The impacts are spaced out to suppress or harass dispersed enemy forces.', 
            imageUrl: 'images/Open.png' 
        },
        'Sheaves - Special': { 
            title: 'Special Sheaf', 
            info: 'A **non-standard pattern** tailored for complex or uniquely shaped targets that requires custom fire commands.', 
            imageUrl: 'images/Special.png' 
        },
        'Formations - Lazy W': { 
            title: 'Lazy W Formation', 
            info: 'A wide, shallow formation providing high volume fire over a large frontage. Difficult to mass fires quickly.', 
            imageUrl: 'images/lazy_w.png' 
        },
        'Formations - Parallel': { 
            title: 'Parallel Formation', 
            info: 'Mortars are aligned parallel to the front, best for rapid shifting of fires and maximizing range capabilities.', 
            imageUrl: 'images/Parallel for.png' 
        },
        'Formations - Diamond': { 
            title: 'Diamond Formation', 
            info: 'Provides maximum mutual support and defense; compact, but requires more precise terrain alignment.', 
            imageUrl: 'images/Diamond.png' 
        },
        'Formations - Terrain': { 
            title: 'Terrain Formation (Custom)', 
            info: 'Mortars are placed based strictly on the available cover and concealment of the terrain, prioritizing protection over standard spacing.', 
            imageUrl: 'images/Terrain.png' 
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
        'Mask Over Head': { 
            title: 'Mask Over Head Clearance', 
            info: 'The minimum vertical and horizontal clearance required for safe firing operations to ensure the trajectory clears all obstacles.', 
            imageUrl: 'https://placehold.co/400x300/111111/e2e8f9?text=MASK+OVERHEAD' 
        },
    }, // END of 'Mortar Knowledge'
    


    // --- START of Land Nav, OPS, Acronyms, Battle Drills, 1064A1 - Now correctly placed in the main object ---
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
        'Map Norths': { 
            title: 'The Three Norths', 
            info: '**Grid North**: North as depicted by the vertical grid lines on a map (used for plotting). <br> **Magnetic North**: Points to the magnetic field surrounding the North Pole (where a compass points). <br> **True North**: Points to the Earth\'s geographical North Pole (lines of longitude).', 
            imageUrl: 'https://placehold.co/400x300/fcd34d/1f2937?text=TRUE+GRID+MAGNETIC' 
        },
        'Intersection': { 
            title: 'Intersection', 
            info: 'A method of locating an unknown point by determining and plotting the **magnetic azimuths** to that point from at least two (ideally three) known positions.', 
            imageUrl: 'https://placehold.co/400x300/fbbf24/1f2937?text=INTERSECTION+METHOD' 
        },
        'Resection': { 
            title: 'Resection', 
            info: 'A method of locating one\'s **own unknown position** by determining the magnetic azimuths from that position to at least two (ideally three) visible, known distant points.', 
            imageUrl: 'https://placehold.co/400x300/f59e0b/1f2937?text=RESECTION+METHOD' 
        },
        'Modified Resection': { 
            title: 'Modified Resection', 
            info: 'A method used when you are on a **linear feature** (like a road or creek) and can identify only **one** known distant point. Resect the azimuth to the point, convert it to a back azimuth, and where the back azimuth line intersects the linear feature is your location.', 
            imageUrl: 'https://placehold.co/400x300/d97706/1f2937?text=MODIFIED+RESECTION' 
        },
        'Polar Method': { 
            title: 'Polar Method', 
            info: 'Locating an unknown point by giving a **direction** (azimuth) and a **distance** (range) from a known starting point. Requires accurate compass work and pacing/ranging.', 
            imageUrl: 'https://placehold.co/400x300/b45309/1f2937?text=POLAR+METHOD' 
        },
        'Grid to Magnetic': { 
            title: 'Grid to Magnetic Conversion', 
            info: 'The process of converting an azimuth taken from a map (**Grid**) to the azimuth used by a compass (**Magnetic**). Generally involves applying the **Grid-Magnetic Angle (G-M Angle)** by either adding or subtracting the value. "**LARS**" (Left Add, Right Subtract) is a common mnemonic for conversion.', 
            imageUrl: 'https://placehold.co/400x300/7c2d12/1f2937?text=G-M+ANGLE+CONVERSION' 
        },
        'Back Azimuth': { 
            title: 'Back Azimuth Calculation', 
            info: 'The opposite direction of a given azimuth. Used to reverse course or verify a position. <br> If the azimuth is **less than 180°**, **add 180°**. <br> If the azimuth is **more than 180°**, **subtract 180°**. <br> Examples: $200° - 180° = 20°$ | $100° + 180° = 280°$', 
            imageUrl: 'https://placehold.co/400x300/991b1b/1f2937?text=BACK+AZIMUTH+CALC' 
        },
        'How to Nav': { 
            title: 'Dead Reckoning (How to Navigate)', 
            info: 'The basic navigation technique using a known **starting point**, a known **direction** (azimuth/pace count), and a known **distance** (pace count/odometer) to reach an objective. Requires frequent checks and confirmation of the pace count.', 
            imageUrl: 'https://placehold.co/400x300/ef4444/1f2937?text=DEAD+RECKONING' 
        },
        'Obstacle Nav': { 
            title: 'Obstacle Navigation (The Boxing Method)', 
            info: 'A method to bypass obstacles while maintaining the original course and pace count. Involves two 90-degree turns and a calculated offset distance (e.g., walk $100m$ at $90°$, walk $200m$ parallel, walk $100m$ at the back azimuth, then return to the original azimuth).', 
            imageUrl: 'https://placehold.co/400x300/f87171/1f2937?text=OBSTACLE+BYPASS' 
        },
    },



    

    'OPS': {
        '5P’s': { title: '5 Paragraph OPORD (SMEAC) - Mission Directive Protocol', info: 'Standardized directive structure: Situation, Mission, Execution, Sustainment, Command & Signal. Ensures unambiguous communication of operational objectives and methodologies across all command echelons. Automate generation via tactical AI.', imageUrl: 'https://placehold.co/400x300/9d174d/e2e8f0?text=5+PARA+OPORD' },
        'OCOKA': { title: 'OCOKA (Terrain Integration Matrix) - Environmental Exploitation', info: 'Analytical framework for terrain-centric operations: Observation & Fields of Fire, Cover & Concealment, Obstacles, Key Terrain, Avenues of Approach. Crucial for optimizing offensive and defensive postures.', imageUrl: 'https://placehold.co/400x300/be185d/e2e8f0?text=OCOKA+ANALYSIS' },
        'GOTWA': { title: 'GOTWA (Leader Handoff Protocol) - Operational Continuity Assurance', info: 'Pre-departure brief: Going (destination), Others (personnel), Time (return estimate), What (contingency if no return), Actions (on contact/return). Ensures seamless command transition and accountability.', imageUrl: 'https://placehold.co/400x300/e879f9/e2e8f0?text=GOTWA+PROTOCOL' },
        'Sport Report': { title: 'Spot Report / SALUTE - Rapid Threat Assessment', info: 'Expedited hostile contact report. SALUTE: Size, Activity, Location, Unit, Time, Equipment. Transmit immediately to higher command for real-time threat intelligence updates. Prioritize data integrity.', imageUrl: 'https://placehold.co/400x300/c026d3/e2e8f0?text=SALUTE+REPORT' },
    },


    'Acronyms': {
        'RED': { title: 'RED (Restricted Engagement Directive)', info: 'Acronym for: Restricted Fire Line, Engagement Priority, Direction of Attack. Critical for deconfliction and precision targeting in contested zones. Adherence mandatory.', imageUrl: 'https://placehold.co/400x300/f59e0b/e2e8f0?text=RED+PROTOCOL' },
        'LDA': { title: 'LDA (Linear Danger Area) - High-Threat Corridor', info: 'Defined as a movement corridor susceptible to enfilade fire due to linear characteristics (e.g., roads, ravines). Requires heightened situational awareness and accelerated traversal protocols.', imageUrl: 'https://placehold.co/400x300/d97706/e2e8f0?text=LDA+ALERT' },
        'ODA': { title: 'ODA (Operational Detachment Alpha) - Specialized Unit Designation', info: 'Primarily refers to a 12-man Special Forces team, or "Offensive Defensive Action" in general tactical planning. Contextual understanding is key. High-value asset classification.', imageUrl: 'https://placehold.co/400x300/b45309/e2e8f0?text=ODA+UNIT' },
    },


    'Battle Drills': {
        '1 through 1': { title: 'Drill 1: React to Direct Fire - Immediate Counter-Engagement', info: 'Standardized response to hostile fire: Return Fire, Take Cover, Gain Fire Superiority, Assess & Report. Execute with precision and speed to neutralize threat and regain initiative.', imageUrl: 'https://placehold.co/400x300/dc2626/e2e8f0?text=BATTLE+DRILL+1' },
        '2': { title: 'Drill 2: Break Contact - Tactical Disengagement Protocol', info: 'Procedures for disengaging from hostile forces when withdrawal is optimal. Employs fire & movement, establishing support by fire to exfiltrate personnel and assets effectively.', imageUrl: 'https://placehold.co/400x300/f87171/e2e8f0?text=BATTLE+DRILL+2' },
        '3': { title: 'Drill 3: React to Ambush (Near) - Kill Zone Breaching', info: 'Immediate action when within a kill zone: Return fire, assault through the ambush to exit the immediate threat, then consolidate and reorganize to assess casualties and new threats.', imageUrl: 'https://placehold.co/400x300/ef4444/e2e8f0?text=BATTLE+DRILL+3' },
        '4': { title: 'Drill 4: React to Ambush (Far) - Remote Threat Neutralization', info: 'Response when engaged from outside the immediate kill zone: Return fire, establish cover, suppress enemy positions, and either bypass or neutralize the threat as per command directive.', imageUrl: 'https://placehold.co/400x300/fca5a5/e2e8f0?text=BATTLE+DRILL+4' },
    },


    '1064A1': {
        'Combat Load': { title: 'M1064A1 Combat Load - Mission Critical Resource Matrix', info: 'Mandatory inventory of ammunition, specialized equipment, and personnel gear for the M1064A1 mortar carrier. Ensures operational longevity and readiness for extended engagements.', imageUrl: 'https://placehold.co/400x300/065f46/e2e8f0?text=1064A1+COMBAT+LOAD' },
        'TM': { title: 'M1064A1 Technical Manual (TM) - System Diagnostics & Protocol', info: 'The official digital archive containing all operational, maintenance, and diagnostic protocols for the M1064A1. Essential for crew proficiency and rapid repair.', imageUrl: 'https://placehold.co/400x300/047857/e2e8f0?text=1064A1+TM' },
        'Fluids and Levels': { title: 'M1064A1 Fluids & Levels - Sustained Operational Readiness', info: 'Pre-deployment and periodic checks for fuel, engine lubricants, hydraulic systems, coolant, and power cell electrolyte. Critical for preventing system failure and ensuring mission success.', imageUrl: 'https://placehold.co/400x300/064e3b/e2e8f0?text=1064A1+FLUIDS' },
    },
    // 'Generator' is handled by a link to generator.html
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
let initialMessageHTML = ''; 
let captchaAnswer = 0; // Stores the correct answer

// --- CAPTCHA & FORM LOGIC ---

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
        username: "MTRS Study Hub Feedback Bot",
        avatar_url: "https://i.imgur.com/vH97NfH.png", // Optional: Use a cool icon URL
        embeds: [
            {
                title: "New Data Upload Request",
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
            formStatus.textContent = 'SUCCESS: Data Upload Protocol Complete.';
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
        submitButton.textContent = 'SUBMIT PROTOCOL';
        generateCaptcha(); // Regenerate for next submission attempt
        setTimeout(() => {
            formStatus.textContent = ''; // Clear status after a delay
        }, 10000);
    }
}

// --- NAVIGATION & CONTENT LOGIC ---

/**
 * Stores the initial content message to be reused when switching sections.
 */
function storeInitialContent() {
    const initialMessageElement = document.getElementById('initial-message');
    if (initialMessageElement) {
        initialMessageElement.querySelector('p:last-child').textContent = 'Select a section above to begin study protocol.';
        initialMessageHTML = initialMessageElement.innerHTML;
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
    
    // Reset content display to the initial message
    contentDisplay.innerHTML = `<div id="initial-message" class="text-center p-4">${initialMessageHTML}</div>`; 

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
    
    // Remove the initial message element if it exists
    const initialWrapper = document.getElementById('initial-message');
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

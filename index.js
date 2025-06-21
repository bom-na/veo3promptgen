
const translations = {
    en: {
        appTitle: "Veo 3 Prompt Generator",
        mainHeading: "Veo 3 Consistent Character Prompt Generator",
        langSwitcherTo: "Indonesia",
        presetsHeader: "Preset Examples",
        labelSceneTitle: "Scene Title",
        placeholderSceneTitle: "e.g., Night bus terminal",
        labelCoreCharacterDescription: "Core Character Description",
        placeholderCoreCharacterDescription: "e.g., A 27-year-old young male vlogger from Maluku. Physique/Body Shape: muscular body, height 164cm, proportional body shape...",
        labelCharacterVoiceDetails: "Character Voice Details",
        placeholderCharacterVoiceDetails: "e.g., He speaks with a warm and enthusiastic young male voice. Tone: Young Male...",
        labelCharacterAction: "Character Action",
        placeholderCharacterAction: "e.g., walking around the night bus terminal looking at passenger and vendor activities.",
        labelCharacterExpression: "Character Expression",
        placeholderCharacterExpression: "e.g., The character shows expressions of awe and enthusiasm, often smiling while glancing at the camera.",
        labelSettingTime: "Background Setting & Time",
        placeholderSettingTime: "e.g., Setting: at an intercity bus terminal at night... Time: night, light rain.",
        labelCameraMovement: "Camera Movement",
        placeholderCameraMovementSelect: "Select Camera Movement...",
        labelAdditionalVisualDetails: "Other Visual Details (Lighting, Style)",
        placeholderAdditionalVisualDetails: "e.g., Lighting: natural from streetlights and bus lights, reflections on wet asphalt. Video Style/Art Style: cinematic realistic.",
        labelVisualQuality: "Visual Quality",
        placeholderVisualQualitySelect: "Select Visual Quality...",
        visualQualityOptionDefault: "Default (Strive for Max Quality)",
        visualQualityOptionHD: "HD (1080p)",
        visualQualityOption4K: "4K UHD",
        visualQualityOptionCinematic: "Cinematic Quality (Detailed & Clear)",
        visualQualityInstructionDefault: "Strive for maximum visual fidelity, ensure extremely sharp details, accurate lighting, vibrant colors, and absolutely no blurriness or compression artifacts. The output should be professional-grade quality.",
        visualQualityInstructionHD: "Render the video in clear HD (1080p resolution). Focus on sharp imagery and good clarity. Avoid any blurriness.",
        visualQualityInstruction4K: "Render the video in 4K Ultra High Definition. Prioritize extreme sharpness, fine details, and impeccable clarity. No blurriness or artifacts.",
        visualQualityInstructionCinematic: "Produce a cinematic quality render, emphasizing critically sharp focus, rich micro-details, excellent dynamic range, and pristine visual clarity. Avoid motion blur (unless dictated by camera movement), softness, or compression artifacts.",
        labelOverallAtmosphere: "Overall Atmosphere",
        placeholderOverallAtmosphere: "e.g., Busy, crowded atmosphere, with a lively and dynamic night journey impression despite the rain.",
        labelEnvironmentalSound: "Environmental Sound/Ambience",
        placeholderEnvironmentalSound: "e.g., sound of bus engines running, announcements from loudspeakers, light rain patter...",
        labelCharacterDialog: "Character Dialogue",
        placeholderCharacterDialog: "e.g., Character says: Every city has a terminal like this, and I love the night atmosphere... warm even in this drizzle. Feels like a new journey is about to begin.",
        labelNegativePrompt: "Negative Prompt",
        placeholderNegativePrompt: "e.g., on-screen text, subtitles, text in video, fonts, logos, distortion, artifacts, anomalies, double faces, deformed limbs, abnormal hands, extra people, distracting objects, low quality, blurry, glitch, robotic voice, broken voice.",
        generateBtn: "Generate Prompt",
        outputHeader: "Generated Prompt",
        outputPlaceholder: "Generated prompt will appear here...",
        copyBtn: "Copy Prompt",
        copiedBtn: "Copied!",
        footerText: "Veo 3 Prompt Generator by DemangFedia",
        preset1Name: "Vlogger at Night Bus Terminal Example",
        resultIDHeader: "Hasil Prompt (Indonesia)",
        resultENHeader: "Final Prompt (English)",
        resultIDPlaceholder: "Indonesian prompt will appear here...",
        resultENPlaceholder: "Final English prompt will appear here...",
        voiceSuffixImportant: "\nIMPORTANT: All dialogue must be in natural and clear English. Ensure this character's voice is consistent throughout the video.",
        soundPrefix: "SOUND:",
        dialogPrefix: "DIALOGUE IN ENGLISH:",
        negativePrefix: "AVOID:",
        visualQualityInstructionsHeader: "VISUAL QUALITY INSTRUCTIONS:",
        copyResultIDBtn: "Copy Indonesian",
        copyResultENBtn: "Copy English",
        clearFormBtn: "Clear Form",
    },
    id: {
        appTitle: "Generator Prompt Veo 3",
        mainHeading: "Generator Prompt Karakter Konsisten Veo 3",
        langSwitcherTo: "English",
        presetsHeader: "Contoh Preset",
        labelSceneTitle: "Judul Scene",
        placeholderSceneTitle: "contoh: Terminal bus malam",
        labelCoreCharacterDescription: "Deskripsi Karakter Inti",
        placeholderCoreCharacterDescription: "contoh: Seorang vlogger pria muda asal Maluku berusia 27 tahun. Perawakan/Bentuk Tubuh: tubuh kekar, tinggi 164cm, bentuk badan proporsional...",
        labelCharacterVoiceDetails: "Detail Suara Karakter",
        placeholderCharacterVoiceDetails: "contoh: Dia berbicara dengan suara pria muda yang hangat dan penuh semangat. Nada: Young Male...",
        labelCharacterAction: "Aksi Karakter",
        placeholderCharacterAction: "contoh: berjalan di sekitar terminal bus malam sambil melihat-lihat aktivitas penumpang dan pedagang.",
        labelCharacterExpression: "Ekspresi Karakter",
        placeholderCharacterExpression: "contoh: Karakter menunjukkan ekspresi kagum dan antusias, sering tersenyum sambil melirik kamera.",
        labelSettingTime: "Latar Tempat & Waktu",
        placeholderSettingTime: "contoh: latar tempat: di terminal bus antar kota malam hari... Waktu: malam hari, hujan rintik-rintik.",
        labelCameraMovement: "Gerakan Kamera",
        placeholderCameraMovementSelect: "Pilih Gerakan Kamera...",
        labelAdditionalVisualDetails: "Detail Visual Lainnya (Pencahayaan, Gaya)",
        placeholderAdditionalVisualDetails: "contoh: Pencahayaan: natural dari lampu jalan dan lampu bus, pantulan cahaya pada aspal basah. Gaya Video/Art Style: cinematic realistis.",
        labelVisualQuality: "Kualitas Visual",
        placeholderVisualQualitySelect: "Pilih Kualitas Visual...",
        visualQualityOptionDefault: "Default (Usahakan Kualitas Maksimal)",
        visualQualityOptionHD: "HD (1080p)",
        visualQualityOption4K: "4K UHD",
        visualQualityOptionCinematic: "Kualitas Sinematik (Detail & Jernih)",
        visualQualityInstructionDefault: "Usahakan fidelitas visual maksimal, pastikan detail yang sangat tajam, pencahayaan akurat, warna yang hidup, dan sama sekali tidak ada keburaman atau artefak kompresi. Output harus berkualitas profesional.",
        visualQualityInstructionHD: "Render video dalam HD (resolusi 1080p) yang jernih. Fokus pada citra yang tajam dan kejelasan yang baik. Hindari keburaman.",
        visualQualityInstruction4K: "Render video dalam 4K Ultra High Definition. Prioritaskan ketajaman ekstrem, detail halus, dan kejernihan sempurna. Tidak ada keburaman atau artefak.",
        visualQualityInstructionCinematic: "Hasilkan render berkualitas sinematik, tekankan fokus yang sangat tajam, detail mikro yang kaya, rentang dinamis yang sangat baik, dan kejernihan visual murni. Hindari motion blur (kecuali ditentukan oleh gerakan kamera), kelembutan, atau artefak kompresi.",
        labelOverallAtmosphere: "Suasana Keseluruhan",
        placeholderOverallAtmosphere: "contoh: Suasana sibuk, ramai, dengan kesan perjalanan malam yang hidup dan dinamis meskipun hujan.",
        labelEnvironmentalSound: "Suara Lingkungan/Ambience",
        placeholderEnvironmentalSound: "contoh: suara mesin bus menyala, pengumuman dari pengeras suara, derai hujan ringan...",
        labelCharacterDialog: "Dialog Karakter",
        placeholderCharacterDialog: "contoh: Karakter berkata: Tiap kota punya terminal kayak gini...",
        labelNegativePrompt: "Negative Prompt",
        placeholderNegativePrompt: "contoh: Hindari: teks di layar, subtitle, tulisan di video, font, logo, distorsi...",
        generateBtn: "Generate Prompt",
        outputHeader: "Hasil Prompt",
        outputPlaceholder: "Hasil prompt akan muncul di sini...",
        copyBtn: "Copy Prompt",
        copiedBtn: "Tersalin!",
        footerText: "Veo 3 Prompt Generator by DemangFedia",
        preset1Name: "Contoh Vlogger di Terminal Bus Malam",
        resultIDHeader: "Hasil Prompt (Indonesia)",
        resultENHeader: "Final Prompt (English)",
        resultIDPlaceholder: "Prompt Bahasa Indonesia akan muncul di sini...",
        resultENPlaceholder: "Final English prompt will appear here...",
        voiceSuffixImportant: "\nPENTING: Seluruh dialog harus dalam Bahasa Indonesia dengan pengucapan natural dan jelas. Pastikan suara karakter ini konsisten di seluruh video.",
        soundPrefix: "SOUND:",
        dialogPrefix: "DIALOG DALAM BAHASA INDONESIA:",
        negativePrefix: "Hindari:",
        visualQualityInstructionsHeader: "INSTRUKSI KUALITAS VISUAL:",
        copyResultIDBtn: "Salin Indonesia",
        copyResultENBtn: "Salin Inggris",
        clearFormBtn: "Bersihkan Formulir",
    }
};

const internalPlaceholderForCameraMovements = {
    en: "Camera Movement: Static Shot (Bidikan Statis), Pan Left (Geser Kiri), Pan Right (Geser Kanan), Tilt Up (Miring ke Atas), Tilt Down (Miring ke Bawah), Zoom In (Perbesar), Zoom Out (Perkecil), Dolly Zoom In (Dolly Zoom Masuk), Dolly Zoom Out (Dolly Zoom Keluar), Tracking Shot (Bidikan Mengikuti), Crane Up (Derek ke Atas), Crane Down (Derek ke Bawah), Aerial View (Tampilan Udara), Orbit Left (Mengorbit ke Kiri), Orbit Right (Mengorbit ke Kanan), First Person View (FPV) (Tampilan Orang Pertama (FPV)), Dutch Angle (Sudut Belanda), 3D Rotation (Rotasi 3D), Time Lapse (Selang Waktu), Slow Motion (Gerak Lambat), Stop Motion (Gerak Henti), etc.",
    id: "Gerakan Kamera: Static Shot (Bidikan Statis), Pan Left (Geser Kiri), Pan Right (Geser Kanan), Tilt Up (Miring ke Atas), Tilt Down (Miring ke Bawah), Zoom In (Perbesar), Zoom Out (Perkecil), Dolly Zoom In (Dolly Zoom Masuk), Dolly Zoom Out (Dolly Zoom Keluar), Tracking Shot (Bidikan Mengikuti), Crane Up (Derek ke Atas), Crane Down (Derek ke Bawah), Aerial View (Tampilan Udara), Orbit Left (Mengorbit ke Kiri), Orbit Right (Mengorbit ke Kanan), First Person View (FPV) (Tampilan Orang Pertama (FPV)), Dutch Angle (Sudut Belanda), 3D Rotation (Rotasi 3D), Time Lapse (Selang Waktu), Slow Motion (Gerak Lambat), Stop Motion (Gerak Henti), dll."
};

const presets = [
    {
        id: "vloggerNightTerminal",
        data: {
            sceneTitle: "Terminal bus malam",
            coreCharacterDescription: "Seorang vlogger pria muda asal Maluku berusia 27 tahun.\nPerawakan/Bentuk Tubuh: tubuh kekar, tinggi 164cm, bentuk badan proporsional.\nWarna kulit: sawo matang cerah.\nRambut: lurus, hitam kecokelatan, belah samping.\nWajah: wajah oval, alis tebal alami, mata hitam besar, senyum ramah, pipi merona, bibir natural.\nPakaian: mengenakan jaket hoddie warna loreng dan celana panjang hitam robek di lutut, membawa ransel kecil.",
            characterVoiceDetails: "Dia berbicara dengan suara pria muda yang hangat dan penuh semangat.\nNada: Young Male.\nTimbre: bersahabat dan enerjik.\nAksen/Logat: logat Indonesia dengan sentuhan khas Maluku halus, berbicara murni dalam Bahasa Indonesia.\nCara Berbicara: tempo sedang-cepat, gaya bicara lincah dan ekspresif.",
            characterAction: "berjalan di sekitar terminal bus malam sambil melihat-lihat aktivitas penumpang dan pedagang.",
            characterExpression: "Karakter menunjukkan ekspresi kagum dan antusias, sering tersenyum sambil melirik kamera.",
            settingTime: "Latar tempat: di terminal bus antar kota malam hari, terdapat pedagang kaki lima di pinggir jalur keberangkatan, beberapa bus berjajar dengan lampu menyala.\nWaktu: malam hari, hujan rintik-rintik.",
            additionalVisualDetailsMaster: "Gerakan Kamera: Tracking Shot (Bidikan Mengikuti) dari belakang karakter lalu menyamping dan ke depan mengikuti langkahnya secara sinematik, Pan Right (Geser Kanan) untuk menunjukkan suasana terminal, Zoom In (Perbesar) pada ekspresi karakter.\nPencahayaan: natural dari lampu jalan dan lampu bus, pantulan cahaya pada aspal basah.\nGaya Video/Art Style: cinematic realistis.\nKualitas Visual: Resolusi 4K.",
            overallAtmosphere: "Suasana sibuk, ramai, dengan kesan perjalanan malam yang hidup dan dinamis meskipun hujan.",
            environmentalSound: "suara mesin bus menyala, pengumuman dari pengeras suara, derai hujan ringan, dan percakapan samar antar penumpang dan pedagang.",
            characterDialog: "Karakter berkata: Tiap kota punya terminal kayak gini, dan aku suka banget suasana malamnya… hangat walau gerimis begini. Rasanya kayak perjalanan baru mau dimulai.",
            negativePrompt: "teks di layar, subtitle, tulisan di video, font, logo, distorsi, artefak, anomali, wajah ganda, anggota badan cacat, tangan tidak normal, orang tambahan, objek mengganggu, kualitas rendah, buram, glitch, suara robotik, suara pecah."
        }
    }
];

let currentLang = 'id';

const S = (key) => translations[currentLang][key] || key;

let cameraMovementOptions = [];
let visualQualityOptions = [];

function parseCameraMovementsForDropdown(lang) {
    const placeholder = internalPlaceholderForCameraMovements[lang];
    const options = [];

    const movementKeyword = lang === 'en' ? "Camera Movement: " : "Gerakan Kamera: ";
    let startIndex = placeholder.indexOf(movementKeyword);
    if (startIndex === -1) return [];
    startIndex += movementKeyword.length;
    
    let endIndex = placeholder.length;
    const endMarkerEtc = lang === 'en' ? "etc." : "dll.";
    const etcIndex = placeholder.lastIndexOf(endMarkerEtc);
    if (etcIndex > startIndex) {
        endIndex = etcIndex;
    }

    let movementsStr = placeholder.substring(startIndex, endIndex).trim();
    if (movementsStr.endsWith(',')) {
        movementsStr = movementsStr.slice(0, -1).trim(); 
    }
    
    const rawMovements = movementsStr.split(',').map(m => m.trim()).filter(m => m);

    rawMovements.forEach(movementText => {
        if (movementText) {
            options.push({
                displayText: movementText,
                value: movementText 
            });
        }
    });
    return options;
}

function prepareVisualQualityOptions(lang) {
    const originalGlobalLang = currentLang; // Save global currentLang
    currentLang = lang; // Temporarily set lang for S function
    const options = [
        { value: "default", displayText: S('visualQualityOptionDefault') },
        { value: "hd", displayText: S('visualQualityOptionHD') },
        { value: "4k", displayText: S('visualQualityOption4K') },
        { value: "cinematic", displayText: S('visualQualityOptionCinematic') }
    ];
    currentLang = originalGlobalLang; // Restore global currentLang
    return options;
}

function updateUIStrings() {
    const originalLang = currentLang;
    document.documentElement.lang = currentLang;
    
    cameraMovementOptions = parseCameraMovementsForDropdown(currentLang);
    // When calling prepareVisualQualityOptions, it temporarily changes currentLang
    // Ensure this doesn't affect S calls for other parts if prepareVisualQualityOptions is refactored
    visualQualityOptions = prepareVisualQualityOptions(currentLang); 
    // currentLang should be correctly set for the rest of S calls after this line.

    document.getElementById('appTitle').textContent = S('appTitle');
    document.getElementById('mainHeading').textContent = S('mainHeading');
    document.getElementById('langSwitcher').textContent = S('langSwitcherTo');
    document.getElementById('presetsHeader').textContent = S('presetsHeader');

    const labels = [
        'labelSceneTitle', 'labelCoreCharacterDescription', 'labelCharacterVoiceDetails',
        'labelCharacterAction', 'labelCharacterExpression', 'labelSettingTime',
        'labelCameraMovement', 'labelAdditionalVisualDetails', 'labelVisualQuality',
        'labelOverallAtmosphere', 'labelEnvironmentalSound',
        'labelCharacterDialog', 'labelNegativePrompt'
    ];
    labels.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = S(id);
    });
    
    const cameraMovementSelect = document.getElementById('cameraMovementSelect');
    if (cameraMovementSelect) {
        const currentValue = cameraMovementSelect.value; 
        cameraMovementSelect.innerHTML = `<option value="">${S('placeholderCameraMovementSelect')}</option>`; 
        cameraMovementOptions.forEach(opt => {
            const optionEl = document.createElement('option');
            optionEl.value = opt.value;
            optionEl.textContent = opt.displayText;
            cameraMovementSelect.appendChild(optionEl);
        });
        
        if (cameraMovementOptions.some(opt => opt.value === currentValue)) {
            cameraMovementSelect.value = currentValue;
        } else {
            cameraMovementSelect.value = ""; 
        }
    }

    const visualQualitySelect = document.getElementById('visualQualitySelect');
    if (visualQualitySelect) {
        const currentValue = visualQualitySelect.value;
        visualQualitySelect.innerHTML = `<option value="">${S('placeholderVisualQualitySelect')}</option>`;
        visualQualityOptions.forEach(opt => {
            const optionEl = document.createElement('option');
            optionEl.value = opt.value;
            optionEl.textContent = opt.displayText;
            visualQualitySelect.appendChild(optionEl);
        });
         if (visualQualityOptions.some(opt => opt.value === currentValue)) {
            visualQualitySelect.value = currentValue;
        } else {
            visualQualitySelect.value = ""; 
        }
    }

    const placeholders = {
        'sceneTitle': 'placeholderSceneTitle',
        'coreCharacterDescription': 'placeholderCoreCharacterDescription',
        'characterVoiceDetails': 'placeholderCharacterVoiceDetails',
        'characterAction': 'placeholderCharacterAction',
        'characterExpression': 'placeholderCharacterExpression',
        'settingTime': 'placeholderSettingTime',
        'additionalVisualDetails': 'placeholderAdditionalVisualDetails',
        'overallAtmosphere': 'placeholderOverallAtmosphere',
        'environmentalSound': 'placeholderEnvironmentalSound',
        'characterDialog': 'placeholderCharacterDialog',
        'negativePrompt': 'placeholderNegativePrompt',
        'generatedPromptOutput': 'outputPlaceholder',
        'resultID': 'resultIDPlaceholder',
    };
    for (const [elementId, placeholderKey] of Object.entries(placeholders)) {
        const element = document.getElementById(elementId);
        if (element) {
            if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                element.placeholder = S(placeholderKey);
            }
        }
    }
    const resultENDiv = document.getElementById('resultEN');
    if (resultENDiv) {
        resultENDiv.setAttribute('data-placeholder', S('resultENPlaceholder'));
         if (!resultENDiv.textContent && resultENDiv.innerHTML.trim() === '') { 
            resultENDiv.innerHTML = ''; 
        }
    }

    document.getElementById('generateBtn').textContent = S('generateBtn');
    document.getElementById('outputHeader').textContent = S('outputHeader');
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn && copyBtn.textContent !== S('copiedBtn')) {
        copyBtn.textContent = S('copyBtn');
    }

    document.getElementById('resultIDHeader').textContent = S('resultIDHeader');
    document.getElementById('resultENHeader').textContent = S('resultENHeader');

    const copyResultIDBtn = document.getElementById('copyResultIDBtn');
    if (copyResultIDBtn && copyResultIDBtn.textContent !== S('copiedBtn')) {
        copyResultIDBtn.textContent = S('copyResultIDBtn');
    }
    const copyResultENBtn = document.getElementById('copyResultENBtn');
    if (copyResultENBtn && copyResultENBtn.textContent !== S('copiedBtn')) {
        copyResultENBtn.textContent = S('copyResultENBtn');
    }
    
    const clearFormBtn = document.getElementById('clearFormBtn');
    if (clearFormBtn) {
        clearFormBtn.textContent = S('clearFormBtn');
    }

    document.getElementById('footerText').innerHTML = S('footerText');
    renderPresets();
}

function switchLanguage() {
    currentLang = (currentLang === 'id') ? 'en' : 'id';
    updateUIStrings();
}

function ensurePrefix(text, prefixLabel) {
    const trimmedText = text.trim();
    if (!trimmedText) return "";

    const actualPrefix = prefixLabel.trim();
    // Simplified common keyword extraction
    const commonKeyword = actualPrefix.split(" ")[0].toLowerCase().replace(':', ''); 

    // Case-insensitive check for the prefix
    if (trimmedText.toLowerCase().startsWith(commonKeyword)) {
        let contentAfterUserPrefix = trimmedText;
        const colonIndex = trimmedText.indexOf(':');
        if (colonIndex !== -1) {
            contentAfterUserPrefix = trimmedText.substring(colonIndex + 1).trim();
        } else {
            // Attempt to remove keyword if no colon
            const spaceIndex = trimmedText.toLowerCase().indexOf(commonKeyword + " ");
            if (spaceIndex === 0 && trimmedText.length > commonKeyword.length + 1) {
                 contentAfterUserPrefix = trimmedText.substring(commonKeyword.length + 1).trim();
            } else if (trimmedText.toLowerCase() === commonKeyword) { 
                 contentAfterUserPrefix = ""; // Only keyword was present
            }
        }
        return `${actualPrefix} ${contentAfterUserPrefix}`;
    }
    return `${actualPrefix} ${trimmedText}`;
}


const defaultNegativeTerms = [
    "blurry", "low resolution", "pixelated", "watermark", "text overlay", "logo", 
    "jpeg artifacts", "compression artifacts", "out of focus", "hazy", "soft focus", 
    "muddy textures", "aliasing", "color banding", "ghosting", "oversaturated", 
    "undersaturated", "distorted", "warped", "malformed", "ugly", "disfigured",
    "poorly drawn", "bad anatomy", "extra limbs", "missing limbs", "fused fingers",
    "too many fingers", "bad hands", "extra fingers", "mutated hands", "cloned face",
    "glitch", "error", "cropped", "cut off"
];

function buildPromptStructure(targetLang) {
    const originalLangForS = currentLang;
    currentLang = targetLang; 

    let output = "";

    const fields = [
        { id: 'sceneTitle', labelKey: 'labelSceneTitle' },
        { id: 'coreCharacterDescription', labelKey: 'labelCoreCharacterDescription', multiline: true },
        { id: 'characterVoiceDetails', labelKey: 'labelCharacterVoiceDetails', multiline: true, suffixKey: 'voiceSuffixImportant' },
        { id: 'characterAction', labelKey: 'labelCharacterAction', multiline: true },
        { id: 'characterExpression', labelKey: 'labelCharacterExpression', multiline: true },
        { id: 'settingTime', labelKey: 'labelSettingTime', multiline: true },
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        let value = element ? element.value.trim() : "";
        
        output += `${S(field.labelKey).toUpperCase()}:\n`;
        if (value) {
            output += `${value}\n`;
        }
        if (field.suffixKey && value) {
            output += `${S(field.suffixKey)}\n`;
        }
        output += "\n";
    });

    const cameraMovementSelect = document.getElementById('cameraMovementSelect');
    const cameraMovementValue = cameraMovementSelect ? cameraMovementSelect.value : "";
    if (cameraMovementValue) {
        output += `${S('labelCameraMovement').toUpperCase()}:\n${cameraMovementValue}\n\n`;
    }
    
    const additionalVisualDetailsElement = document.getElementById('additionalVisualDetails');
    const additionalVisualDetailsValue = additionalVisualDetailsElement ? additionalVisualDetailsElement.value.trim() : "";
    if (additionalVisualDetailsValue) {
        output += `${S('labelAdditionalVisualDetails').toUpperCase()}:\n${additionalVisualDetailsValue}\n\n`;
    }

    const visualQualitySelectElement = document.getElementById('visualQualitySelect');
    const visualQualityValue = visualQualitySelectElement ? visualQualitySelectElement.value : "";
    if (visualQualityValue) {
        output += `${S('visualQualityInstructionsHeader').toUpperCase()}\n`;
        switch(visualQualityValue) {
            case "default": output += `${S('visualQualityInstructionDefault')}\n`; break;
            case "hd": output += `${S('visualQualityInstructionHD')}\n`; break;
            case "4k": output += `${S('visualQualityInstruction4K')}\n`; break;
            case "cinematic": output += `${S('visualQualityInstructionCinematic')}\n`; break;
        }
        output += "\n";
    }

    const remainingFields = [
        { id: 'overallAtmosphere', labelKey: 'labelOverallAtmosphere', multiline: true },
        { id: 'environmentalSound', labelKey: 'labelEnvironmentalSound', prefixKey: 'soundPrefix', multiline: true},
        { id: 'characterDialog', labelKey: 'labelCharacterDialog',  prefixKey: 'dialogPrefix', multiline: true },
    ];

    remainingFields.forEach(field => {
        const textarea = document.getElementById(field.id);
        let value = textarea ? textarea.value.trim() : "";

        output += `${S(field.labelKey).toUpperCase()}:\n`;

        if (field.prefixKey && value) {
            value = ensurePrefix(value, S(field.prefixKey));
            output += `${value}\n`;
        } else if (value) {
            output += `${value}\n`;
        }
        output += "\n";
    });

    const negativePromptTextarea = document.getElementById('negativePrompt');
    let userNegativePrompt = negativePromptTextarea ? negativePromptTextarea.value.trim() : "";
    let combinedNegativePrompt = userNegativePrompt;

    const userNegativeTermsLower = userNegativePrompt.toLowerCase().split(/[\s,]+/).filter(term => term);
    
    defaultNegativeTerms.forEach(term => {
        if (!userNegativeTermsLower.includes(term.toLowerCase())) {
            combinedNegativePrompt += (combinedNegativePrompt ? ", " : "") + term;
        }
    });
    
    if (combinedNegativePrompt) {
        output += `${S('labelNegativePrompt').toUpperCase()}:\n`;
        output += ensurePrefix(combinedNegativePrompt, S('negativePrefix'));
        output += "\n\n";
    }

    currentLang = originalLangForS; 
    return output.trim();
}

function generatePrompt() {
    const promptForCurrentUI = buildPromptStructure(currentLang);
    const generatedPromptOutput = document.getElementById('generatedPromptOutput');
    if (generatedPromptOutput) {
        generatedPromptOutput.value = promptForCurrentUI;
    }

    const indonesianPrompt = buildPromptStructure('id');
    const resultIDTextarea = document.getElementById('resultID');
    if (resultIDTextarea) {
        resultIDTextarea.value = indonesianPrompt;
    }

    const englishPrompt = buildPromptStructure('en');
    const resultENDiv = document.getElementById('resultEN');
    if (resultENDiv) {
        resultENDiv.textContent = englishPrompt;
        if (!englishPrompt && resultENDiv.innerHTML.trim() === '') { 
            resultENDiv.innerHTML = '';
        }
    }
}

function copyTextFromElement(elementId, buttonId, originalTextKey, copiedStateTextKey) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;

    let textToCopy = "";
    if (textElement instanceof HTMLTextAreaElement || textElement instanceof HTMLInputElement) {
        textToCopy = textElement.value;
    } else if (textElement instanceof HTMLDivElement) {
        textToCopy = textElement.textContent || "";
    }

    const copyBtnElement = document.getElementById(buttonId);
    if (!copyBtnElement) return;

    if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                copyBtnElement.textContent = S(copiedStateTextKey);
                setTimeout(() => {
                    copyBtnElement.textContent = S(originalTextKey);
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback for browsers that might have issues (e.g. on insecure origins)
                fallbackCopyText(textToCopy, copyBtnElement, originalTextKey, copiedStateTextKey);
            });
    } else if (textToCopy) {
        fallbackCopyText(textToCopy, copyBtnElement, originalTextKey, copiedStateTextKey);
    }
}

function fallbackCopyText(textToCopy, copyBtnElement, originalTextKey, copiedStateTextKey) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    tempTextArea.style.position = 'absolute';
    tempTextArea.style.left = '-9999px';
    document.body.appendChild(tempTextArea);

    let success = false;
    try {
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, textToCopy.length); // For mobile Safari
        success = document.execCommand('copy');
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        success = false;
    }

    document.body.removeChild(tempTextArea);

    if (success) {
        copyBtnElement.textContent = S(copiedStateTextKey);
        setTimeout(() => {
            copyBtnElement.textContent = S(originalTextKey);
        }, 2000);
    } else {
         alert('Failed to copy text. Please try again or copy manually.');
    }
}


function copyMainPrompt() {
    copyTextFromElement('generatedPromptOutput', 'copyBtn', 'copyBtn', 'copiedBtn');
}

function renderPresets() {
    const presetContainer = document.getElementById('presetContainer');
    if (!presetContainer) return;
    presetContainer.innerHTML = '';

    presets.forEach((preset, index) => {
        const button = document.createElement('button');
        button.classList.add('preset-button');
        const presetNameKey = `preset${index + 1}Name`;
        button.textContent = S(presetNameKey) || preset.id; // Fallback to preset.id if translation not found
        button.setAttribute('aria-label', `Load preset: ${S(presetNameKey) || preset.id}`);
        button.onclick = () => loadPreset(preset.data); 
        presetContainer.appendChild(button);
    });
}

function loadPreset(presetData) {
    for (const fieldId in presetData) {
        if (fieldId === 'additionalVisualDetailsMaster') {
            const masterString = presetData[fieldId];
            let remainingDetails = masterString;
            let cameraMovementFoundInPreset = false;

            const cameraMovementSelect = document.getElementById('cameraMovementSelect');
            if (cameraMovementSelect) {
                const keywordsToTry = [
                    { lang: 'en', keyword: "Camera Movement:" },
                    { lang: 'id', keyword: "Gerakan Kamera:" }
                ];

                for (const { keyword } of keywordsToTry) {
                    const movementKeywordIndex = masterString.toLowerCase().indexOf(keyword.toLowerCase());
                    if (movementKeywordIndex !== -1) {
                        const movementStart = movementKeywordIndex + keyword.length;
                        
                        const terminators = ["Lighting:", "Pencahayaan:", "Video Style/Art Style:", "Gaya Video/Art Style:", "Visual Quality:", "Kualitas Visual:"];
                        let movementEnd = masterString.length;
                        terminators.forEach(term => {
                            const termIndex = masterString.indexOf(term, movementStart);
                            if (termIndex !== -1 && termIndex > movementStart) { // Ensure terminator is after keyword
                                movementEnd = Math.min(movementEnd, termIndex);
                            }
                        });
                        
                        let cameraMovementString = masterString.substring(movementStart, movementEnd).trim();
                        // Remove potential trailing punctuation from extracted movement string before matching
                        if (cameraMovementString.endsWith('.') || cameraMovementString.endsWith(',')) {
                            cameraMovementString = cameraMovementString.slice(0, -1).trim();
                        }
                        const firstMovement = cameraMovementString.split('.')[0].split(',')[0].trim();

                        for (const option of cameraMovementOptions) { 
                             // Make matching more robust
                            if (option.value.toLowerCase().includes(firstMovement.toLowerCase()) || 
                                firstMovement.toLowerCase().includes(option.value.toLowerCase()) || 
                                option.value.toLowerCase() === firstMovement.toLowerCase()) {
                                 cameraMovementSelect.value = option.value;
                                 cameraMovementFoundInPreset = true;
                                 break;
                            }
                        }
                        if (cameraMovementFoundInPreset) {
                            let endOfMovementStrIndex = movementStart + cameraMovementString.length;
                            remainingDetails = masterString.substring(endOfMovementStrIndex).trim();
                            // If remainingDetails starts with a terminator, remove it.
                            terminators.forEach(term => {
                                if (remainingDetails.toLowerCase().startsWith(term.toLowerCase())) {
                                    remainingDetails = remainingDetails.substring(term.length).trim();
                                }
                            });
                            // Further clean up: if remainingDetails starts with things like "Lighting:", remove that.
                            const detailsKeywords = ["Lighting:", "Pencahayaan:", "Video Style/Art Style:", "Gaya Video/Art Style:"];
                            detailsKeywords.forEach(dk => {
                                if (remainingDetails.toLowerCase().startsWith(dk.toLowerCase())) {
                                    remainingDetails = remainingDetails.substring(dk.length).trim();
                                }
                            });

                            break; 
                        }
                    }
                }
                if (!cameraMovementFoundInPreset) {
                    cameraMovementSelect.value = ""; 
                }
            }

            const additionalVisualDetailsTextarea = document.getElementById('additionalVisualDetails');
            if (additionalVisualDetailsTextarea) {
                // Remove the quality part if it exists in remainingDetails as it's handled by visualQualitySelect
                const qualityKeywords = ["Kualitas Visual:", "Visual Quality:"];
                let finalDetails = remainingDetails;
                qualityKeywords.forEach(qk => {
                    const qkIndex = finalDetails.toLowerCase().indexOf(qk.toLowerCase());
                    if (qkIndex !== -1) {
                        finalDetails = finalDetails.substring(0, qkIndex).trim();
                    }
                });
                additionalVisualDetailsTextarea.value = finalDetails;
            }

            const visualQualitySelect = document.getElementById('visualQualitySelect');
            if (visualQualitySelect) {
                const lowerMasterString = masterString.toLowerCase();
                if (lowerMasterString.includes("4k")) {
                    visualQualitySelect.value = "4k";
                } else if (lowerMasterString.includes("hd") || lowerMasterString.includes("1080p")) {
                    visualQualitySelect.value = "hd";
                } else if (lowerMasterString.includes("cinematic")) {
                    visualQualitySelect.value = "cinematic";
                } else {
                    visualQualitySelect.value = "default";
                }
            }

        } else {
            const element = document.getElementById(fieldId);
            if (element) {
                element.value = presetData[fieldId];
            }
        }
    }

    const clearFormBtn = document.getElementById('clearFormBtn');
    if (clearFormBtn) {
        clearFormBtn.classList.remove('hidden');
    }
    const promptForm = document.getElementById('promptForm');
    if (promptForm) {
        promptForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function clearFormFields() {
    const promptForm = document.getElementById('promptForm');
    if (promptForm) {
        const textareas = promptForm.querySelectorAll('textarea');
        textareas.forEach(input => {
            input.value = '';
        });
        const selects = promptForm.querySelectorAll('select');
        selects.forEach(select => {
            select.value = ''; 
        });
    }

    const generatedPromptOutput = document.getElementById('generatedPromptOutput');
    if (generatedPromptOutput) generatedPromptOutput.value = '';

    const resultIDTextarea = document.getElementById('resultID');
    if (resultIDTextarea) resultIDTextarea.value = '';

    const resultENDiv = document.getElementById('resultEN');
    if (resultENDiv) {
        resultENDiv.textContent = '';
        resultENDiv.innerHTML = ''; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('langSwitcher').addEventListener('click', switchLanguage);
    document.getElementById('generateBtn').addEventListener('click', generatePrompt);
    document.getElementById('copyBtn').addEventListener('click', copyMainPrompt);
    
    const clearFormBtn = document.getElementById('clearFormBtn');
    if (clearFormBtn) {
      clearFormBtn.addEventListener('click', clearFormFields);
    }

    document.getElementById('copyResultIDBtn').addEventListener('click', () => {
        copyTextFromElement('resultID', 'copyResultIDBtn', 'copyResultIDBtn', 'copiedBtn');
    });
    document.getElementById('copyResultENBtn').addEventListener('click', () => {
        copyTextFromElement('resultEN', 'copyResultENBtn', 'copyResultENBtn', 'copiedBtn');
    });

    updateUIStrings();
});

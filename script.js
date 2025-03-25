// Pipe size data
const pipeData = [
    ['1/8"', '6', '10.3', '', '1.24', '1.73', '2.41', '1.24', '', '1.45', '1.73', '1.73', '', '2.41', '2.41', '', '', '', '', ''],
    ['1/4"', '8', '13.7', '', '1.65', '2.24', '3.02', '1.65', '', '1.85', '2.24', '2.24', '', '3.02', '3.02', '', '', '', '', ''],
    ['3/8"', '10', '17.1', '', '1.65', '2.31', '3.2', '1.65', '', '1.85', '2.31', '2.31', '', '3.2', '3.2', '', '', '', '', ''],
    ['1/2"', '15', '21.3', '1.65', '2.11', '2.77', '3.73', '2.11', '', '2.41', '2.77', '2.77', '', '3.73', '3.73', '', '', '', '4.78', '7.47'],
    ['3/4"', '20', '26.7', '1.65', '2.11', '2.87', '3.91', '2.11', '', '2.41', '2.87', '2.87', '', '3.91', '3.91', '', '', '', '5.56', '7.82'],
    ['1"', '25', '33.4', '1.65', '2.77', '3.38', '4.55', '2.77', '', '2.9', '3.38', '3.38', '', '4.55', '4.55', '', '', '', '6.35', '9.09'],
    ['1-1/4"', '32', '42.2', '1.65', '2.77', '3.56', '4.85', '2.77', '', '2.97', '3.56', '3.56', '', '4.85', '4.85', '', '', '', '6.35', '9.7'],
    ['1-1/2"', '40', '48.3', '1.65', '2.77', '3.68', '5.08', '2.77', '', '3.18', '3.68', '3.68', '', '5.08', '5.08', '', '', '', '7.14', '10.15'],
    ['2"', '50', '60.3', '1.65', '2.77', '3.91', '5.54', '2.77', '', '3.18', '3.91', '3.91', '', '5.54', '5.54', '', '', '', '8.74', '11.07'],
    ['2-1/2"', '65', '73', '2.11', '3.05', '5.16', '7.01', '3.05', '', '4.78', '5.16', '5.16', '', '7.01', '7.01', '', '', '', '9.53', '14.02'],
    ['3"', '80', '88.9', '2.11', '3.05', '5.49', '7.62', '3.05', '', '4.78', '5.49', '5.49', '', '7.62', '7.62', '', '', '', '11.13', '15.24'],
    ['3-1//2"', '90', '101.6', '2.11', '3.05', '5.74', '8.08', '3.05', '', '4.78', '5.74', '5.74', '', '8.08', '8.08', '', '', '', '', ''],
    ['4"', '100', '114.3', '2.11', '3.05', '6.02', '8.56', '3.05', '', '4.78', '6.02', '6.02', '', '8.56', '8.56', '', '11.13', '', '13.49', '17.12'],
    ['5"', '125', '141.3', '2.77', '3.4', '6.55', '9.53', '3.4', '', '', '6.55', '6.55', '', '9.53', '9.53', '', '12.7', '', '15.88', '19.05'],
    ['6"', '150', '168.3', '2.77', '3.4', '7.11', '10.97', '3.4', '', '', '7.11', '7.11', '', '10.97', '10.97', '', '14.27', '', '18.26', '21.95'],
    ['8"', '200', '219.1', '2.77', '3.76', '8.18', '12.7', '3.76', '6.35', '7.04', '8.18', '8.18', '10.31', '12.7', '12.7', '15.09', '18.26', '20.62', '23.01', '22.23'],
    ['10"', '250', '273.1', '3.4', '4.19', '9.27', '12.7', '4.19', '6.35', '7.8', '9.27', '9.27', '12.7', '15.09', '12.7', '18.26', '21.44', '25.4', '28.58', '25.4'],
    ['12"', '300', '323.9', '3.96', '4.57', '9.53', '12.7', '4.57', '6.35', '8.38', '10.31', '9.53', '14.27', '17.48', '12.7', '21.44', '25.4', '28.58', '33.32', '25.4'],
    ['14"', '350', '355.6', '3.96', '4.78', '9.53', '12.7', '6.35', '7.92', '9.53', '11.13', '9.53', '15.09', '19.05', '12.7', '23.83', '27.79', '31.75', '35.71', ''],
    ['16"', '400', '406.4', '4.19', '4.78', '9.53', '12.7', '6.35', '7.92', '9.53', '12.7', '9.53', '16.66', '21.44', '12.7', '26.19', '30.96', '36.53', '40.49', ''],
    ['18"', '450', '457.2', '4.19', '4.78', '9.53', '12.7', '6.35', '7.92', '11.13', '14.27', '9.53', '19.05', '23.83', '12.7', '29.36', '34.93', '39.67', '45.24', ''],
    ['20"', '500', '508', '4.78', '5.54', '9.53', '12.7', '6.35', '9.53', '12.7', '15.09', '9.53', '20.62', '26.19', '12.7', '32.54', '38.1', '44.45', '50.01', ''],
    ['22"', '550', '558.8', '4.78', '5.54', '9.53', '12.7', '6.35', '9.53', '12.7', '', '9.53', '22.23', '28.58', '12.7', '34.93', '41.28', '47.63', '53.98', ''],
    ['24"', '600', '609.6', '5.54', '6.35', '9.53', '12.7', '6.35', '9.53', '14.27', '17.48', '9.53', '24.61', '30.96', '12.7', '38.89', '46.02', '52.37', '59.54', '']
];

const pipeHeaders = [
    'NPS', 'DN', 'OD (mm)', 'SCH5S', 'SCH10S', 'SCH40S', 'SCH80S', 'SCH10', 'SCH20', 'SCH30', 
    'SCH40', 'STD', 'SCH60', 'SCH80', 'XS', 'SCH100', 'SCH120', 'SCH140', 'SCH160', 'XXS'
];

// Formula data
const formulaData = [
    ['Tấm', 'm = T(mm) x W(m) x L(m) x Tỷ trọng(g/cm³)'],
    ['Ống tròn', 'm = 0.003141 x T(mm) x [O.D(mm) - T(mm)] x Tỷ trọng(g/cm³) x L(m)'],
    ['Ống vuông', 'm = [4 x T(mm) x A(mm) - 4 x T(mm) x T(mm)] x Tỷ trọng(g/cm³) x 0.001 x L(m)'],
    ['Ống chữ nhật', 'm = {2 x T(mm) x [A1(mm) + A2(mm)] - 4 x T(mm) x T(mm)} x Tỷ trọng(g/cm³) x 0.001 x L(m)'],
    ['Lập là (Thanh la)', 'm = 0.001 x W(mm) x T(mm) x Tỷ trọng(g/cm³) x L(m)'],
    ['Cây đặc tròn', 'm = 0.0007854 x O.D(mm) x O.D(mm) x Tỷ trọng(g/cm³) x L(m)'],
    ['Cây đặc vuông', 'm = 0.001 x W(mm) x W(mm) x Tỷ trọng(g/cm³) x L(m)'],
    ['Cây đặc lục giác', 'm = 0.000866 x I.D(mm) x Tỷ trọng(g/cm³) x L(m)'],
    ['Thép V', 'm = {[2A(mm) - T(mm)] x T(mm) x L(mm) x Tỷ trọng} / 1000'],
    ['Thép U', 'm = [0,785 x H x t1 + 2xt2 x (B - t1)] / 1000 (H: bụng, B: cánh)']
];

// Density data
const densityData = [
    ['Carbon / Hardox / XAR / Everhard', '7.85'],
    ['201 / 202 / 301 / 302 / 303 / 304(L) / 305 / 321', '7.93'],
    ['309S / 310(S) / 316(L) / 347 / 2205 / 2507 / Zeron100 / Duplex / 253MA', '7.98'],
    ['405 / 410 / 420', '7.75'],
    ['409 / 430 / 434', '7.70'],
    ['Nhôm', '2.7'],
    ['Đồng', '8.96'],
    ['Inconel 625', '8.4']
];

// Cat images based on weight
const catImages = {
    small: 'images/cat1.png',    // For weight < 10kg
    medium: 'images/cat2.png',   // For weight 10-100kg
    large: 'images/cat3.png'     // For weight > 100kg
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Generate pipe size table
    generateTable('pipeSizeTable', pipeHeaders, pipeData);
    
    // Generate formula table
    generateTable('formulaTable', ['Loại thép', 'Công thức'], formulaData);
    
    // Generate density table
    generateTable('densityTable', ['Vật liệu', 'Tỷ trọng (g/cm³)'], densityData);
    
    // Set up shape change event
    document.getElementById('shape').addEventListener('change', updateInputFields);
    
    // Set up calculate button
    document.getElementById('calculateBtn').addEventListener('click', calculateWeight);
    
    // Initialize input fields
    updateInputFields();
});

// Generate table function
function generateTable(tableId, headers, data) {
    const table = document.getElementById(tableId);
    let html = '<thead><tr>';
    
    // Add headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    // Add data rows
    data.forEach(row => {
        html += '<tr>';
        row.forEach((cell, index) => {
            if (index === 0) {
                html += `<td><strong>${cell}</strong></td>`;
            } else {
                html += `<td>${cell || '-'}</td>`;
            }
        });
        html += '</tr>';
    });
    
    html += '</tbody>';
    table.innerHTML = html;
}

// Update input fields based on selected shape
function updateInputFields() {
    const shape = document.getElementById('shape').value;
    const inputFields = document.getElementById('inputFields');
    let html = '';
    
    switch(shape) {
        case 'sheet':
            html = `
                <div class="form-group">
                    <label for="thickness">Độ dày (mm):</label>
                    <input type="number" id="thickness" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="width">Chiều rộng (m):</label>
                    <input type="number" id="width" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'roundPipe':
            html = `
                <div class="form-group">
                    <label for="thickness">Độ dày (mm):</label>
                    <input type="number" id="thickness" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="outerDiameter">Đường kính ngoài (mm):</label>
                    <input type="number" id="outerDiameter" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'squarePipe':
            html = `
                <div class="form-group">
                    <label for="thickness">Độ dày (mm):</label>
                    <input type="number" id="thickness" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="sideLength">Chiều dài cạnh (mm):</label>
                    <input type="number" id="sideLength" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'rectPipe':
            html = `
                <div class="form-group">
                    <label for="thickness">Độ dày (mm):</label>
                    <input type="number" id="thickness" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="sideA1">Cạnh A1 (mm):</label>
                    <input type="number" id="sideA1" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="sideA2">Cạnh A2 (mm):</label>
                    <input type="number" id="sideA2" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'flatBar':
            html = `
                <div class="form-group">
                    <label for="width">Chiều rộng (mm):</label>
                    <input type="number" id="width" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="thickness">Độ dày (mm):</label>
                    <input type="number" id="thickness" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'roundBar':
            html = `
                <div class="form-group">
                    <label for="outerDiameter">Đường kính (mm):</label>
                    <input type="number" id="outerDiameter" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'squareBar':
            html = `
                <div class="form-group">
                    <label for="width">Chiều rộng (mm):</label>
                    <input type="number" id="width" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'hexBar':
            html = `
                <div class="form-group">
                    <label for="innerDiameter">Đường kính trong (mm):</label>
                    <input type="number" id="innerDiameter" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'vSteel':
            html = `
                <div class="form-group">
                    <label for="sideA">Cạnh A (mm):</label>
                    <input type="number" id="sideA" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="thickness">Độ dày (mm):</label>
                    <input type="number" id="thickness" step="0.01" min="0">
                </div>
            `;
            break;
            
        case 'uSteel':
            html = `
                <div class="form-group">
                    <label for="height">Chiều cao bụng H (mm):</label>
                    <input type="number" id="height" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="flangeWidth">Chiều rộng cánh B (mm):</label>
                    <input type="number" id="flangeWidth" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="webThickness">Độ dày bụng t1 (mm):</label>
                    <input type="number" id="webThickness" step="0.01" min="0">
                </div>
                <div class="form-group">
                    <label for="flangeThickness">Độ dày cánh t2 (mm):</label>
                    <input type="number" id="flangeThickness" step="0.01" min="0">
                </div>
            `;
            break;
    }
    
    inputFields.innerHTML = html;
}

// Calculate weight function
function calculateWeight() {
    const shape = document.getElementById('shape').value;
    const density = parseFloat(document.getElementById('material').value);
    const length = parseFloat(document.getElementById('length').value);
    
    let weight = 0;
    let formulaUsed = '';
    
    // Get values based on shape
    try {
        switch(shape) {
            case 'sheet':
                const thicknessSheet = parseFloat(document.getElementById('thickness').value);
                const widthSheet = parseFloat(document.getElementById('width').value);
                weight = thicknessSheet * widthSheet * length * density;
                formulaUsed = `m = ${thicknessSheet} x ${widthSheet} x ${length} x ${density}`;
                break;
                
            case 'roundPipe':
                const thicknessPipe = parseFloat(document.getElementById('thickness').value);
                const outerDiameter = parseFloat(document.getElementById('outerDiameter').value);
                weight = 0.003141 * thicknessPipe * (outerDiameter - thicknessPipe) * density * length;
                formulaUsed = `m = 0.003141 x ${thicknessPipe} x (${outerDiameter} - ${thicknessPipe}) x ${density} x ${length}`;
                break;
                
            case 'squarePipe':
                const thicknessSquarePipe = parseFloat(document.getElementById('thickness').value);
                const sideLength = parseFloat(document.getElementById('sideLength').value);
                weight = (4 * thicknessSquarePipe * sideLength - 4 * thicknessSquarePipe * thicknessSquarePipe) * density * 0.001 * length;
                formulaUsed = `m = [4 x ${thicknessSquarePipe} x ${sideLength} - 4 x ${thicknessSquarePipe}²] x ${density} x 0.001 x ${length}`;
                break;
                
            case 'rectPipe':
                const thicknessRectPipe = parseFloat(document.getElementById('thickness').value);
                const sideA1 = parseFloat(document.getElementById('sideA1').value);
                const sideA2 = parseFloat(document.getElementById('sideA2').value);
                weight = (2 * thicknessRectPipe * (sideA1 + sideA2) - 4 * thicknessRectPipe * thicknessRectPipe) * density * 0.001 * length;
                formulaUsed = `m = {2 x ${thicknessRectPipe} x (${sideA1} + ${sideA2}) - 4 x ${thicknessRectPipe}²} x ${density} x 0.001 x ${length}`;
                break;
                
            case 'flatBar':
                const widthFlat = parseFloat(document.getElementById('width').value);
                const thicknessFlat = parseFloat(document.getElementById('thickness').value);
                weight = 0.001 * widthFlat * thicknessFlat * density * length;
                formulaUsed = `m = 0.001 x ${widthFlat} x ${thicknessFlat} x ${density} x ${length}`;
                break;
                
            case 'roundBar':
                const diameter = parseFloat(document.getElementById('outerDiameter').value);
                weight = 0.0007854 * diameter * diameter * density * length;
                formulaUsed = `m = 0.0007854 x ${diameter}² x ${density} x ${length}`;
                break;
                
            case 'squareBar':
                const widthSquare = parseFloat(document.getElementById('width').value);
                weight = 0.001 * widthSquare * widthSquare * density * length;
                formulaUsed = `m = 0.001 x ${widthSquare}² x ${density} x ${length}`;
                break;
                
            case 'hexBar':
                const innerDiameter = parseFloat(document.getElementById('innerDiameter').value);
                weight = 0.000866 * innerDiameter * density * length;
                formulaUsed = `m = 0.000866 x ${innerDiameter} x ${density} x ${length}`;
                break;
                
            case 'vSteel':
                const sideA = parseFloat(document.getElementById('sideA').value);
                const thicknessV = parseFloat(document.getElementById('thickness').value);
                weight = ((2 * sideA - thicknessV) * thicknessV * length * density) / 1000;
                formulaUsed = `m = [(2 x ${sideA} - ${thicknessV}) x ${thicknessV} x ${length} x ${density}] / 1000`;
                break;
                
            case 'uSteel':
                const height = parseFloat(document.getElementById('height').value);
                const flangeWidth = parseFloat(document.getElementById('flangeWidth').value);
                const webThickness = parseFloat(document.getElementById('webThickness').value);
                const flangeThickness = parseFloat(document.getElementById('flangeThickness').value);
                weight = (0.785 * height * webThickness + 2 * flangeThickness * (flangeWidth - webThickness)) * length * density / 1000;
                formulaUsed = `m = [0.785 x ${height} x ${webThickness} + 2 x ${flangeThickness} x (${flangeWidth} - ${webThickness})] x ${length} x ${density} / 1000`;
                break;
        }
    } catch (e) {
        showResult('Vui lòng nhập đầy đủ thông tin', 'images/cat-error.png');
        return;
    }
    
    if (isNaN(weight)) {
        showResult('Vui lòng nhập đầy đủ thông tin', 'images/cat-error.png');
        return;
    }
    
    // Determine which cat image to show based on weight
    let catImage;
    if (weight < 10) {
        catImage = catImages.small;
    } else if (weight < 100) {
        catImage = catImages.medium;
    } else {
        catImage = catImages.large;
    }
    
    // Show result
    const resultText = `
        <p><strong>Trọng lượng:</strong> ${weight.toFixed(2)} kg</p>
        <p><strong>Công thức sử dụng:</strong> ${formulaUsed}</p>
    `;
    
    showResult(resultText, catImage);
}

// Show result with cat image
function showResult(content, catImage) {
    const result = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');
    const resultCat = document.getElementById('resultCat');
    
    resultContent.innerHTML = content;
    resultCat.src = catImage;
    result.style.display = 'block';
    
    // Scroll to result
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

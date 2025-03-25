document.addEventListener('DOMContentLoaded', function() {
    // Initialize the input fields based on the default shape
    updateInputFields();
    updateFormulaDisplay();
    populatePipeSizeTable();
    
    // Add event listeners
    document.getElementById('shapeType').addEventListener('change', function() {
        updateInputFields();
        updateFormulaDisplay();
    });
    
    document.getElementById('calculateBtn').addEventListener('click', calculateWeight);
    document.getElementById('resetBtn').addEventListener('click', resetForm);
});

function updateInputFields() {
    const shapeType = document.getElementById('shapeType').value;
    const inputFieldsDiv = document.getElementById('inputFields');
    let html = '';
    
    switch(shapeType) {
        case 'plate':
            html = `
                <div class="card-header">
                    <h5>Thông số tấm thép</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="thickness" class="form-label">Độ dày (T - mm):</label>
                        <input type="number" id="thickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="width" class="form-label">Chiều rộng (W - m):</label>
                        <input type="number" id="width" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'roundPipe':
            html = `
                <div class="card-header">
                    <h5>Thông số ống tròn</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="thickness" class="form-label">Độ dày (T - mm):</label>
                        <input type="number" id="thickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="outerDiameter" class="form-label">Đường kính ngoài (O.D - mm):</label>
                        <input type="number" id="outerDiameter" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'squarePipe':
            html = `
                <div class="card-header">
                    <h5>Thông số ống vuông</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="thickness" class="form-label">Độ dày (T - mm):</label>
                        <input type="number" id="thickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="sideLength" class="form-label">Chiều dài cạnh (A - mm):</label>
                        <input type="number" id="sideLength" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'rectPipe':
            html = `
                <div class="card-header">
                    <h5>Thông số ống chữ nhật</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="thickness" class="form-label">Độ dày (T - mm):</label>
                        <input type="number" id="thickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="sideA" class="form-label">Cạnh A1 (mm):</label>
                        <input type="number" id="sideA" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="sideB" class="form-label">Cạnh A2 (mm):</label>
                        <input type="number" id="sideB" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'flatBar':
            html = `
                <div class="card-header">
                    <h5>Thông số thanh la</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="width" class="form-label">Chiều rộng (W - mm):</label>
                        <input type="number" id="width" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="thickness" class="form-label">Độ dày (T - mm):</label>
                        <input type="number" id="thickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'roundBar':
            html = `
                <div class="card-header">
                    <h5>Thông số cây đặc tròn</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="diameter" class="form-label">Đường kính (O.D - mm):</label>
                        <input type="number" id="diameter" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'squareBar':
            html = `
                <div class="card-header">
                    <h5>Thông số cây đặc vuông</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="sideLength" class="form-label">Chiều dài cạnh (W - mm):</label>
                        <input type="number" id="sideLength" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'hexBar':
            html = `
                <div class="card-header">
                    <h5>Thông số cây đặc lục giác</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="innerDiameter" class="form-label">Đường kính trong (I.D - mm):</label>
                        <input type="number" id="innerDiameter" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'vSteel':
            html = `
                <div class="card-header">
                    <h5>Thông số thép V</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="sideA" class="form-label">Cạnh A (mm):</label>
                        <input type="number" id="sideA" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="thickness" class="form-label">Độ dày (T - mm):</label>
                        <input type="number" id="thickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - mm):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'uSteel':
            html = `
                <div class="card-header">
                    <h5>Thông số thép U</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="height" class="form-label">Chiều cao bụng (H - mm):</label>
                        <input type="number" id="height" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="flangeWidth" class="form-label">Chiều rộng cánh (B - mm):</label>
                        <input type="number" id="flangeWidth" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="webThickness" class="form-label">Độ dày bụng (t1 - mm):</label>
                        <input type="number" id="webThickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="flangeThickness" class="form-label">Độ dày cánh (t2 - mm):</label>
                        <input type="number" id="flangeThickness" class="form-control" step="0.01" min="0">
                    </div>
                    <div class="mb-3">
                        <label for="length" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="length" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
            
        case 'pipeSize':
            html = `
                <div class="card-header">
                    <h5>Kích thước ống tiêu chuẩn</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="pipeNPS" class="form-label">Kích thước NPS:</label>
                        <select id="pipeNPS" class="form-select">
                            <option value="1/8">1/8"</option>
                            <option value="1/4">1/4"</option>
                            <option value="3/8">3/8"</option>
                            <option value="1/2">1/2"</option>
                            <option value="3/4">3/4"</option>
                            <option value="1">1"</option>
                            <option value="1-1/4">1-1/4"</option>
                            <option value="1-1/2">1-1/2"</option>
                            <option value="2">2"</option>
                            <option value="2-1/2">2-1/2"</option>
                            <option value="3">3"</option>
                            <option value="3-1/2">3-1/2"</option>
                            <option value="4">4"</option>
                            <option value="5">5"</option>
                            <option value="6">6"</option>
                            <option value="8">8"</option>
                            <option value="10">10"</option>
                            <option value="12">12"</option>
                            <option value="14">14"</option>
                            <option value="16">16"</option>
                            <option value="18">18"</option>
                            <option value="20">20"</option>
                            <option value="22">22"</option>
                            <option value="24">24"</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="pipeSchedule" class="form-label">Schedule:</label>
                        <select id="pipeSchedule" class="form-select">
                            <option value="SCH5S">SCH5S</option>
                            <option value="SCH10S">SCH10S</option>
                            <option value="SCH40S">SCH40S</option>
                            <option value="SCH80S">SCH80S</option>
                            <option value="SCH10">SCH10</option>
                            <option value="SCH20">SCH20</option>
                            <option value="SCH30">SCH30</option>
                            <option value="SCH40">SCH40</option>
                            <option value="STD">STD</option>
                            <option value="SCH60">SCH60</option>
                            <option value="SCH80">SCH80</option>
                            <option value="XS">XS</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="pipeLength" class="form-label">Chiều dài (L - m):</label>
                        <input type="number" id="pipeLength" class="form-control" step="0.01" min="0">
                    </div>
                </div>
            `;
            break;
    }
    
    inputFieldsDiv.innerHTML = html;
}

function updateFormulaDisplay() {
    const shapeType = document.getElementById('shapeType').value;
    const formulaDiv = document.getElementById('formulaDisplay');
    let formula = '';
    
    switch(shapeType) {
        case 'plate':
            formula = 'm = T(mm) × W(m) × L(m) × Tỷ trọng(g/cm³) × 1000';
            break;
        case 'roundPipe':
            formula = 'm = 0.003141 × T(mm) × [O.D(mm) - T(mm)] × Tỷ trọng(g/cm³) × 1000 × L(m)';
            break;
        case 'squarePipe':
            formula = 'm = [4 × T(mm) × A(mm) - 4 × T(mm) × T(mm)] × Tỷ trọng(g/cm³) × 0.001 × L(m)';
            break;
        case 'rectPipe':
            formula = 'm = {2 × T(mm) × [A1(mm) + A2(mm)] - 4 × T(mm) × T(mm)} × Tỷ trọng(g/cm³) × 0.001 × L(m)';
            break;
        case 'flatBar':
            formula = 'm = 0.001 × W(mm) × T(mm) × Tỷ trọng(g/cm³) × 1000 × L(m)';
            break;
        case 'roundBar':
            formula = 'm = 0.0007854 × O.D(mm) × O.D(mm) × Tỷ trọng(g/cm³) × 1000 × L(m)';
            break;
        case 'squareBar':
            formula = 'm = 0.001 × W(mm) × W(mm) × Tỷ trọng(g/cm³) × 1000 × L(m)';
            break;
        case 'hexBar':
            formula = 'm = 0.000866 × I.D(mm) × Tỷ trọng(g/cm³) × 1000 × L(m)';
            break;
        case 'vSteel':
            formula = 'm = {[2A(mm) - T(mm)] × T(mm) × L(mm) × Tỷ trọng(g/cm³)} / 1000';
            break;
        case 'uSteel':
            formula = 'm = [0.785 × H × t1 + 2 × t2 × (B - t1)] × Tỷ trọng(g/cm³) × L(m) / 1000';
            break;
        case 'pipeSize':
            formula = 'Sử dụng bảng tra kích thước ống tiêu chuẩn để tính toán';
            break;
    }
    
    formulaDiv.innerHTML = `<p><strong>Công thức:</strong> ${formula}</p>`;
}

function calculateWeight() {
    const shapeType = document.getElementById('shapeType').value;
    let density = parseFloat(document.getElementById('steelType').value);
    const customDensity = parseFloat(document.getElementById('customDensity').value);
    
    // Use custom density if provided
    if (!isNaN(customDensity) {
        density = customDensity;
    }
    
    if (isNaN(density) {
        alert('Vui lòng chọn hoặc nhập tỷ trọng');
        return;
    }
    
    let weight = 0;
    let resultText = '';
    
    try {
        switch(shapeType) {
            case 'plate':
                const thickness = parseFloat(document.getElementById('thickness').value);
                const width = parseFloat(document.getElementById('width').value);
                const length = parseFloat(document.getElementById('length').value);
                
                if (isNaN(thickness) || isNaN(width) || isNaN(length)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = thickness * width * length * density * 1000;
                resultText = `Trọng lượng tấm thép: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)`;
                break;
                
            case 'roundPipe':
                const pipeThickness = parseFloat(document.getElementById('thickness').value);
                const outerDiameter = parseFloat(document.getElementById('outerDiameter').value);
                const pipeLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(pipeThickness) || isNaN(outerDiameter) || isNaN(pipeLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = 0.003141 * pipeThickness * (outerDiameter - pipeThickness) * density * 1000 * pipeLength;
                resultText = `Trọng lượng ống tròn: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)`;
                break;
                
            case 'squarePipe':
                const sqThickness = parseFloat(document.getElementById('thickness').value);
                const sideLength = parseFloat(document.getElementById('sideLength').value);
                const sqLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(sqThickness) || isNaN(sideLength) || isNaN(sqLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = (4 * sqThickness * sideLength - 4 * sqThickness * sqThickness) * density * 0.001 * sqLength;
                resultText = `Trọng lượng ống vuông: ${weight.toFixed(2)} kg (${(weight*1000).toFixed(2)} g)`;
                break;
                
            case 'rectPipe':
                const rectThickness = parseFloat(document.getElementById('thickness').value);
                const sideA = parseFloat(document.getElementById('sideA').value);
                const sideB = parseFloat(document.getElementById('sideB').value);
                const rectLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(rectThickness) || isNaN(sideA) || isNaN(sideB) || isNaN(rectLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = (2 * rectThickness * (sideA + sideB) - 4 * rectThickness * rectThickness) * density * 0.001 * rectLength;
                resultText = `Trọng lượng ống chữ nhật: ${weight.toFixed(2)} kg (${(weight*1000).toFixed(2)} g)`;
                break;
                
            case 'flatBar':
                const barWidth = parseFloat(document.getElementById('width').value);
                const barThickness = parseFloat(document.getElementById('thickness').value);
                const barLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(barWidth) || isNaN(barThickness) || isNaN(barLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = 0.001 * barWidth * barThickness * density * 1000 * barLength;
                resultText = `Trọng lượng thanh la: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)`;
                break;
                
            case 'roundBar':
                const diameter = parseFloat(document.getElementById('diameter').value);
                const roundLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(diameter) || isNaN(roundLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = 0.0007854 * diameter * diameter * density * 1000 * roundLength;
                resultText = `Trọng lượng cây đặc tròn: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)`;
                break;
                
            case 'squareBar':
                const squareSide = parseFloat(document.getElementById('sideLength').value);
                const squareLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(squareSide) || isNaN(squareLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = 0.001 * squareSide * squareSide * density * 1000 * squareLength;
                resultText = `Trọng lượng cây đặc vuông: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)`;
                break;
                
            case 'hexBar':
                const innerDiameter = parseFloat(document.getElementById('innerDiameter').value);
                const hexLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(innerDiameter) || isNaN(hexLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = 0.000866 * innerDiameter * density * 1000 * hexLength;
                resultText = `Trọng lượng cây đặc lục giác: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)`;
                break;
                
            case 'vSteel':
                const vSideA = parseFloat(document.getElementById('sideA').value);
                const vThickness = parseFloat(document.getElementById('thickness').value);
                const vLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(vSideA) || isNaN(vThickness) || isNaN(vLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = ((2 * vSideA - vThickness) * vThickness * vLength * density) / 1000;
                resultText = `Trọng lượng thép V: ${weight.toFixed(2)} kg (${(weight*1000).toFixed(2)} g)`;
                break;
                
            case 'uSteel':
                const height = parseFloat(document.getElementById('height').value);
                const flangeWidth = parseFloat(document.getElementById('flangeWidth').value);
                const webThickness = parseFloat(document.getElementById('webThickness').value);
                const flangeThickness = parseFloat(document.getElementById('flangeThickness').value);
                const uLength = parseFloat(document.getElementById('length').value);
                
                if (isNaN(height) || isNaN(flangeWidth) || isNaN(webThickness) || isNaN(flangeThickness) || isNaN(uLength)) {
                    throw new Error('Vui lòng nhập đầy đủ thông số');
                }
                
                weight = (0.785 * height * webThickness + 2 * flangeThickness * (flangeWidth - webThickness)) * density * uLength / 1000;
                resultText = `Trọng lượng thép U: ${weight.toFixed(2)} kg (${(weight*1000).toFixed(2)} g)`;
                break;
                
            case 'pipeSize':
                const nps = document.getElementById('pipeNPS').value;
                const schedule = document.getElementById('pipeSchedule').value;
                const standardLength = parseFloat(document.getElementById('pipeLength').value);
                
                if (isNaN(standardLength)) {
                    throw new Error('Vui lòng nhập chiều dài ống');
                }
                
                // Get thickness from pipe size table
                const pipeData = pipeSizeData.find(item => item.NPS === nps);
                if (!pipeData) {
                    throw new Error('Không tìm thấy thông số ống');
                }
                
                const thickness = pipeData[schedule];
                if (!thickness) {
                    throw new Error('Không tìm thấy thông số độ dày cho schedule này');
                }
                
                // Calculate weight using round pipe formula
                weight = 0.003141 * thickness * (pipeData.OD - thickness) * density * 1000 * standardLength;
                resultText = `Trọng lượng ống ${nps}" (DN${pipeData.DN}), Schedule ${schedule}: ${weight.toFixed(2)} g (${(weight/1000).toFixed(2)} kg)<br>Độ dày thành ống: ${thickness} mm`;
                break;
        }
        
        document.getElementById('result').innerHTML = resultText;
    } catch (error) {
        alert(error.message);
    }
}

function resetForm() {
    document.getElementById('steelType').value = '7.85';
    document.getElementById('customDensity').value = '';
    document.getElementById('shapeType').value = 'plate';
    updateInputFields();
    updateFormulaDisplay();
    document.getElementById('result').innerHTML = '<p>Nhập thông số và nhấn "TÍNH TOÁN"</p>';
}

function populatePipeSizeTable() {
    const tableBody = document.getElementById('pipeSizeTable');
    let html = '';
    
    pipeSizeData.forEach(pipe => {
        html += `
            <tr>
                <td>${pipe.NPS}</td>
                <td>${pipe.DN}</td>
                <td>${pipe.OD}</td>
                <td>${pipe.SCH5S || ''}</td>
                <td>${pipe.SCH10S || ''}</td>
                <td>${pipe.SCH40S || ''}</td>
                <td>${pipe.SCH80S || ''}</td>
                <td>${pipe.SCH10 || ''}</td>
                <td>${pipe.SCH20 || ''}</td>
                <td>${pipe.SCH30 || ''}</td>
                <td>${pipe.SCH40 || ''}</td>
                <td>${pipe.STD || ''}</td>
                <td>${pipe.SCH60 || ''}</td>
                <td>${pipe.SCH80 || ''}</td>
                <td>${pipe.XS || ''}</td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

// Pipe size data
const pipeSizeData = [
    { NPS: '1/8', DN: '6', OD: '10.3', SCH5S: '', SCH10S: '', SCH40S: '1.24', SCH80S: '1.73', SCH10: '1.24', SCH20: '', SCH30: '1.45', SCH40: '1.73', STD: '1.73', SCH60: '', SCH80: '2.41', XS: '2.41' },
    { NPS: '1/4', DN: '8', OD: '13.7', SCH5S: '', SCH10S: '', SCH40S: '1.65', SCH80S: '2.24', SCH10: '1.65', SCH20: '', SCH30: '1.85', SCH40: '2.24', STD: '2.24', SCH60: '', SCH80: '3.02', XS: '3.02' },
    { NPS: '3/8', DN: '10', OD: '17.1', SCH5S: '', SCH10S: '', SCH40S: '1.65', SCH80S: '2.31', SCH10: '1.65', SCH20: '', SCH30: '1.85', SCH40: '2.31', STD: '2.31', SCH60: '', SCH80: '3.2', XS: '3.2' },
    { NPS: '1/2', DN: '15', OD: '21.3', SCH5S: '1.65', SCH10S: '2.11', SCH40S: '2.77', SCH80S: '3.73', SCH10: '2.11', SCH20: '', SCH30: '2.41', SCH40: '2.77', STD: '2.77', SCH60: '', SCH80: '3.73', XS: '3.73' },
    { NPS: '3/4', DN: '20', OD: '26.7', SCH5S: '1.65', SCH10S: '2.11', SCH40S: '2.87', SCH80S: '3.91', SCH10: '2.11', SCH20: '', SCH30: '2.41', SCH40: '2.87', STD: '2.87', SCH60: '', SCH80: '3.91', XS: '3.91' },
    { NPS: '1', DN: '25', OD: '33.4', SCH5S: '1.65', SCH10S: '2.77', SCH40S: '3.38', SCH80S: '4.55', SCH10: '2.77', SCH20: '', SCH30: '2.9', SCH40: '3.38', STD: '3.38', SCH60: '', SCH80: '4.55', XS: '4.55' },
    { NPS: '1-1/4', DN: '32', OD: '42.2', SCH5S: '1.65', SCH10S: '2.77', SCH40S: '3.56', SCH80S: '4.85', SCH10: '2.77', SCH20: '', SCH30: '2.97', SCH40: '3.56', STD: '3.56', SCH60: '', SCH80: '4.85', XS: '4.85' },
    { NPS: '1-1/2', DN: '40', OD: '48.3', SCH5S: '1.65', SCH10S: '2.77', SCH40S: '3.68', SCH80S: '5.08', SCH10: '2.77', SCH20: '', SCH30: '3.18', SCH40: '3.68', STD: '3.68', SCH60: '', SCH80: '5.08', XS: '5.08' },
    { NPS: '2', DN: '50', OD: '60.3', SCH5S: '1.65', SCH10S: '2.77', SCH40S: '3.91', SCH80S: '5.54', SCH10: '2.77', SCH20: '', SCH30: '3.18', SCH40: '3.91', STD: '3.91', SCH60: '', SCH80: '5.54', XS: '5.54' },
    { NPS: '2-1/2', DN: '65', OD: '73', SCH5S: '2.11', SCH10S: '3.05', SCH40S: '5.16', SCH80S: '7.01', SCH10: '3.05', SCH20: '', SCH30: '4.78', SCH40: '5.16', STD: '5.16', SCH60: '', SCH80: '7.01', XS: '7.01' },
    { NPS: '3', DN: '80', OD: '88.9', SCH5S: '2.11', SCH10S: '3.05', SCH40S: '5.49', SCH80S: '7.62', SCH10: '3.05', SCH20: '', SCH30: '4.78', SCH40: '5.49', STD: '5.49', SCH60: '', SCH80: '7.62', XS: '7.62' },
    { NPS: '3-1/2', DN: '90', OD: '101.6', SCH5S: '2.11', SCH10S: '3.05', SCH40S: '5.74', SCH80S: '8.08', SCH10: '3.05', SCH20: '', SCH30: '4.78', SCH40: '5.74', STD: '5.74', SCH60: '', SCH80: '8.08', XS: '8.08' },
    { NPS: '4', DN: '100', OD: '114.3', SCH5S: '2.11', SCH10S: '3.05', SCH40S: '6.02', SCH80S: '8.56', SCH10: '3.05', SCH20: '', SCH30: '4.78', SCH40: '6.02', STD: '6.02', SCH60: '', SCH80: '8.56', XS: '8.56' },
    { NPS: '5', DN: '125', OD: '141.3', SCH5S: '2.77', SCH10S: '3.4', SCH40S: '6.55', SCH80S: '9.53', SCH10: '3.4', SCH20: '', SCH30: '', SCH40: '6.55', STD: '6.55', SCH60: '', SCH80: '9.53', XS: '9.53' },
    { NPS: '6', DN: '150', OD: '168.3', SCH5S: '2.77', SCH10S: '3.4', SCH40S: '7.11', SCH80S: '10.97', SCH10: '3.4', SCH20: '', SCH30: '', SCH40: '7.11', STD: '7.11', SCH60: '', SCH80: '10.97', XS: '10.97' },
    { NPS: '8', DN: '200', OD: '219.1', SCH5S: '2.77', SCH10S: '3.76', SCH40S: '8.18', SCH80S: '12.7', SCH10: '3.76', SCH20: '6.35', SCH30: '7.04', SCH40: '8.18', STD: '8.18', SCH60: '10.31', SCH80: '12.7', XS: '12.7' },
    { NPS: '10', DN: '250', OD: '273.1', SCH5S: '3.4', SCH10S: '4.19', SCH40S: '9.27', SCH80S: '12.7', SCH10: '4.19', SCH20: '6.35', SCH30: '7.8', SCH40: '9.27', STD: '9.27', SCH60: '12.7', SCH80: '15.09', XS: '12.7' },
    { NPS: '12', DN: '300', OD: '323.9', SCH5S: '3.96', SCH10S: '4.57', SCH40S: '9.53', SCH80S: '12.7', SCH10: '4.57', SCH20: '6.35', SCH30: '8.38', SCH40: '10.31', STD: '9.53', SCH60: '14.27', SCH80: '17.48', XS: '12.7' },
    { NPS: '14', DN: '350', OD: '355.6', SCH5S: '3.96', SCH10S: '4.78', SCH40S: '9.53', SCH80S: '12.7', SCH10: '6.35', SCH20: '7.92', SCH30: '9.53', SCH40: '11.13', STD: '9.53', SCH60: '15.09', SCH80: '19.05', XS: '12.7' },
    { NPS: '16', DN: '400', OD: '406.4', SCH5S: '4.19', SCH10S: '4.78', SCH40S: '9.53', SCH80S: '12.7', SCH10: '6.35', SCH20: '7.92', SCH30: '9.53', SCH40: '12.7', STD: '9.53', SCH60: '16.66', SCH80: '21.44', XS: '12.7' },
    { NPS: '18', DN: '450', OD: '457.2', SCH5S: '4.19', SCH10S: '4.78', SCH40S: '9.53', SCH80S: '12.7', SCH10: '6.35', SCH20: '7.92', SCH30: '11.13', SCH40: '14.27', STD: '9.53', SCH60: '19.05', SCH80: '23.83', XS: '12.7' },
    { NPS: '20', DN: '500', OD: '508', SCH5S: '4.78', SCH10S: '5.54', SCH40S: '9.53', SCH80S: '12.7', SCH10: '6.35', SCH20: '9.53', SCH30: '12.7', SCH40: '15.09', STD: '9.53', SCH60: '20.62', SCH80: '26.19', XS: '12.7' },
    { NPS: '22', DN: '550', OD: '558.8', SCH5S: '4.78', SCH10S: '5.54', SCH40S: '9.53', SCH80S: '12.7', SCH10: '6.35', SCH20: '9.53', SCH30: '12.7', SCH40: '', STD: '9.53', SCH60: '22.23', SCH80: '28.58', XS: '12.7' },
    { NPS: '24', DN: '600', OD: '609.6', SCH5S: '5.54', SCH10S: '6.35', SCH40S: '9.53', SCH80S: '12.7', SCH10: '6.35', SCH20: '9.53', SCH30: '14.27', SCH40: '17.48', STD: '9.53', SCH60: '24.61', SCH80: '30.96', XS: '12.7' }
];

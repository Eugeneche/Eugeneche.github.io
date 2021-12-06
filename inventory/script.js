let state

init()

document.querySelector('.add-note').addEventListener('click', createRowItem)
document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-sum-id')) {
        let id = e.target.getAttribute('data-sum-id')
        hideUnnesessaryFields(id)
        showFastSum(id)
        calculateFastSum(id)
        hideFastSum(id)
    }

    if (e.target.hasAttribute('data-edit-id')) {
        let id = e.target.getAttribute('data-edit-id')
        hideUnnesessaryFields(id)
        showEditDialogs(id)
        editItem(id)
        hideEditDialogs(id)
    }
})

function init() {
    if (localStorage.getItem('state')) {
        state = JSON.parse(localStorage.getItem('state'))
        updateOutput()
    } else {
        state = []
    } 
}

function createRowItem() {
    let rowItem = document.createElement('div')
    rowItem.classList.add('row-input')
    rowItem.setAttribute('id', Date.now())
    rowItem.insertAdjacentHTML('afterbegin', 
        `<div class="row-input-top">
            <input class="model-input" type="text" placeholder="reference" autofocus>
            <input class="count-input" type="number" placeholder="počet kusů">
            <button class="save">Uložit</button>
        </div>
        <div class="row-input-bottom">
            <input class="notes-input" type="text" placeholder="poznámky (nepovinné)">
            <button type="text" class="cancel">Zrušit</button>
        </div>`)

    document.querySelector('.add-note').setAttribute('disabled', 'true')
    document.querySelector('.counting').appendChild(rowItem)
    document.querySelector('.save').addEventListener('click', () => {
        getData()
        hideRowItem(rowItem)  
    })
    
    document.querySelector('.cancel').addEventListener('click', () => hideRowItem(rowItem))
}

function hideRowItem(child) {
    document.querySelector('.counting').removeChild(child)
    document.querySelector('.add-note').removeAttribute('disabled')
}

function getData() {
    const itemData = {
        id: null,
        model: '',
        count: 0,
        note: ''
    }

    itemData.id = +document.querySelector('.row-input').id
    if (!document.querySelector('.model-input').value) {
        alert('Musíte uvést reference!')
    } else {
        itemData.model = document.querySelector('.model-input').value
        itemData.count = +document.querySelector('.count-input').value
        itemData.note = document.querySelector('.notes-input').value
    
        state.push(itemData)   
        updateLocalState()
        updateOutput()
    }
}

function updateLocalState() {
    localStorage.clear()
    localStorage.setItem('state', JSON.stringify(state))
}

function updateOutput() {

    let results = document.querySelector('.results')
    results.innerHTML = ''

    let storeFromLocal = JSON.parse(localStorage.getItem('state'))

    storeFromLocal.map(item => {
        return results.insertAdjacentHTML('afterbegin', 
        `<div id=${item.id} class="row-result">
            <div class="row-result-top">
                <div class="model-output">${item.model}</div>
                <div class="count-output">${item.count}</div>
            </div>
            <div class="row-result-middle">
                <div class="note-output">${item.note}</div>
            </div>
            <div class="fast-sum">
                <input class="fast-sum-input" type="number" placeholder="počet kusů" autofocus>
                <button class="fast-sum-cancel-btn cancel">Zrušit</button>
                <button class="fast-sum-confirm-btn save">Přidat</button>
            </div>
            <div class="edit">
                <div class="edit-top">
                    <input class="model-input" type="text" placeholder="reference" value=${item.model}>
                    <input class="count-input" type="number" placeholder="počet kusů" value=${item.count}>                  
                </div>
                <div class="edit-middle">
                    <label for="signs">Vyberte:</label>
                    <select id="signs">
                        <option value="minus" selected>-</option>
                        <option value="plus">+</option>
                        <option value="multiply">X</option>
                        <option value="divide">/</option>
                    </select>
                    <input class="count-new-edit-input" type="number" placeholder="počet kusů">
                </div>
                <div class="edit-bottom">
                    <input class="notes-edit-input" type="text" placeholder="poznámky" value=${item.note}>                    
                </div>        
                <div class="edit-buttons">
                    <button class="delete">Vymazat položku</button> 
                    <button class="cancel hide-edit-btn">Zrušit</button> 
                    <button class="save edit-confirm-btn">Uložit</button>
                </div>        
            </div>
            <div class="row-result-bottom">
                <button class="edit-item-btn" data-edit-id=${item.id}>Upravit položku</button>
                <button class="fast-sum-start-btn" data-sum-id=${item.id}>Rychle přidat</button>
            </div>
        </div>`)
    })
}

function showFastSum(id) {
    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.fast-sum').style.display = 'flex'
}

function hideFastSum(id) {
    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.fast-sum-cancel-btn').addEventListener('click', () => {
        currentItem.querySelector('.fast-sum').style.display = 'none'
        currentItem.querySelector('input').value = ''
        showUnnesessaryFields(id)
    })
}

function calculateFastSum(id) {
    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.fast-sum-confirm-btn').addEventListener('click', () => {
        let valueToAdd = +currentItem.querySelector('input').value
        state.forEach(item => {
            if (item.id == id) {
                return item.count += valueToAdd
            }
        });
        updateLocalState()
        updateOutput()
        currentItem.querySelector('.fast-sum').style.display = 'none'
        //currentItem.querySelector('input').value = ''
        //console.log(state.count = valueToAdd + previousFigure)
    })
}

function showEditDialogs(id) {
    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.edit').style.display = 'block'
}

function hideEditDialogs(id) {
    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.hide-edit-btn').addEventListener('click', () => {
        currentItem.querySelector('.edit').style.display = 'none'
        //currentItem.querySelector('count-new-edit-input').value = ''
        showUnnesessaryFields(id)
    })
    
}

function editItem(id) {

    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.edit-confirm-btn').addEventListener('click', () => {

        state.forEach(item => {
            let select = currentItem.querySelector('select')
            let valueToCalc = +currentItem.querySelector('.count-new-edit-input').value
            let mathAction = select.value

            if (item.id == id) {              
                item.model = currentItem.querySelector('.model-input').value,
                item.note = currentItem.querySelector('.notes-edit-input').value

                if (mathAction === 'minus') {
                    item.count -= valueToCalc                        
                } else if (mathAction === 'plus') {
                    item.count += valueToCalc
                } else if (mathAction === 'multiply') {
                    item.count *= valueToCalc
                } else if (mathAction === 'divide') {
                    item.count /= valueToCalc
                }
            }
        })
        
        updateLocalState()
        updateOutput()
        currentItem.querySelector('.edit').style.display = 'none'
    })

    currentItem.querySelector('.delete').addEventListener('click', () => deleteItem(id))
}

function hideUnnesessaryFields(id) {
    let currentItem = document.getElementById(`${id}`)
    //currentItem.querySelector('.row-result-top').style.display = 'none'
    currentItem.querySelector('.row-result-bottom').style.display = 'none'
}

function showUnnesessaryFields(id) {
    let currentItem = document.getElementById(`${id}`)
    currentItem.querySelector('.row-result-top').style.display = 'flex'
    currentItem.querySelector('.row-result-bottom').style.display = 'flex'
}

function deleteItem(id) {
    
    let indexToDelete
    state.forEach((item, i) => {
        if (item.id == id) {
            return indexToDelete = i
        }
    })
    state.splice(indexToDelete, 1)

    updateLocalState()
    updateOutput()
}


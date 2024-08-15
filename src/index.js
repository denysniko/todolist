document.addEventListener('DOMContentLoaded', () => {
	const getInput = document.querySelector('input')
	const getAddBtn = document.querySelector('.todo__btn')
	const getTasks = document.querySelector('.todo__tasks')

	getInput.addEventListener('click', () => {
		getInput.value.trim() != 0
			? getAddBtn.classList.add('active')
			: getAddBtn.classList.remove('active')
	})

	getAddBtn.addEventListener('click', () => addElement(getInput, getTasks))

	getTasks.addEventListener('click', e => {
		handleTaskAction(e)
	})

	// Function for adding a new task
	const addElement = (inp, task) => {
		if (inp.value.trim() != 0) {
			const newItem = document.createElement('div')
			newItem.classList.add('todo__item')
			newItem.innerHTML = `<p>${inp.value}</p>
    <div class="todo__item-btn">
      <i class="fa-solid fa-check"></i>
      <i class="fa-solid fa-xmark"></i>
    </div>`

			task.append(newItem)
			inp.value = ''
		} else {
			alert('Please add a task')
		}
	}

	// Function for processing clicks on tasks
	const handleTaskAction = e => {
		// mark if the task has been completed
		if (e.target.classList.contains('fa-check')) {
			if (
				e.target.parentNode.parentNode.classList.toggle('todo__item_completed')
			) {
				e.target.style.color = '#2CB67D'
			} else {
				e.target.style.color = ''
			}
		}
		// unlist the task
		if (e.target.classList.contains('fa-xmark')) {
			e.target.parentNode.parentNode.remove()
		}
	}
})

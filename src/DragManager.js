export default new function () {

    let dragObject = {};
    const self = this;

    function onMouseDown(e) {
        if (e.which !== 1) return;
        const elem = e.target.closest('.draggable');
        if (!elem) return;
        dragObject.elem = elem;
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;
        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return;
        let coords;
        if (!dragObject.avatar) {
            const moveX = e.pageX - dragObject.downX;
            const moveY = e.pageY - dragObject.downY;

            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }

            dragObject.avatar = createAvatar(e);
            if (!dragObject.avatar) {
                dragObject = {};
                return;
            }
            coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e);
        }

        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';


        if (!dragObject.avatar.style.width) {
            dragObject.avatar.style.width = coords.width + 'px';
            dragObject.avatar.style.height = coords.height + 'px';
        }
        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) {
            finishDrag(e);
        }
        dragObject = {};
    }

    function finishDrag(e) {
        const dropElem = findDroppable(e);

        if (!dropElem) {
            self.onDragCancel(dragObject);
            dragObject.avatar.rollback();
        } else {
            // dropElem.appendChild(dragObject.avatar);
            dragObject.avatar.style.position = '';
            dragObject.avatar.style.left = '';
            dragObject.avatar.style.top = '';
            dragObject.avatar.style.width = '';
            dragObject.avatar.style.height = '';
            dragObject.avatar.style.zIndex = '';
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {

        const avatar = dragObject.elem;
        const old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            width: '',
            height: '',
            zIndex: avatar.zIndex || '',
        };

        avatar.rollback = function () {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.width = old.width;
            avatar.style.height = old.height;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(e) {
        const avatar = dragObject.avatar;
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
        self.onDragStart(dragObject);
    }

    function findDroppable(event) {
        dragObject.avatar.hidden = true;
        const elem = document.elementFromPoint(event.clientX, event.clientY);
        dragObject.avatar.hidden = false;
        if (elem == null) {
            return null;
        }
        return elem.closest('.droppable');
    }

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            left: box.left + window.pageXOffset,
            width: box.width,
            height: box.height,
        };
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragStart = function (dragObject) {};
    this.onDragEnd = function (dragObject, dropElem) {};
    this.onDragCancel = function (dragObject) {};

};

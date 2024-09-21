
    // step-1 : add event listener to the post button
    document.getElementById('btn-post').addEventListener('click', function () {
    //console.log('post button clicked')

    // Step-2 : Get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;

    // step-3 : set the comment inside the comment container

    /** Step-3 subpoint:
     * 1. get the comment container
     * 2. Create a new element (p tag)
     * 3. set the text of the comment as innerText of the p tag
     * 4. add the p tag using appendChild
     * 
    */
   
    const commentContainer = document.getElementById('comment-container')
    const p = document.createElement('p')
    p.innerText = newComment;
    commentContainer.appendChild(p);

    //Step-4 : clear the text area
    commentBox.value = '';

})
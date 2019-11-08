"use strict";

(function() {
  const initializeAdminModal = function() {
    const modalContainer = document.querySelectorAll(".modalcontainer")[0];
    const formEditModal = document.querySelectorAll(".form-edit-container")[0];
    const formModalContainer = document.querySelectorAll(
      ".formcontainer-modal"
    )[0];
    const formDeleteModal = document.querySelectorAll(
      ".form-delete-container"
    )[0];
    const formTitleEdit = document.querySelectorAll(".formtitle-edit")[0];

    const removeModal = function() {
      modalContainer.style.display = "none";
      formTitleEdit.style.display = "none";
      if (formEditModal.style.display === "block") {
        formEditModal.style.display = "none";
      }
      if (formDeleteModal.style.display === "block") {
        formDeleteModal.style.display = "none";
      }
    };

    const showEditModal = function() {
      modalContainer.style.display = "block";
      formTitleEdit.style.display = "block";
      formEditModal.style.display = "block";
      formModalContainer.style.display = "block";
      formDeleteModal.style.display = "none";
    };

    const showDeleteModal = function() {
      modalContainer.style.display = "block";
      formTitleEdit.style.display = "none";
      formEditModal.style.display = "none";
      formModalContainer.style.display = "none";
      formDeleteModal.style.display = "block";
    };

    const deleteEntireModal = function() {
      const closeBtn = document.querySelector("#closebtn");
      closeBtn.addEventListener("click", removeModal, false);
    };

    function trigerModal() {
      const editModal = document.querySelectorAll(".edit");
      const deleteModal = document.querySelectorAll(".delete");

      for (
        let showIteration = 0, showIndex = editModal.length;
        showIteration < showIndex;
        showIteration++
      ) {
        editModal[showIteration].addEventListener(
          "click",
          showEditModal,
          false
        );
      }
      for (
        let deleteIteration = 0, deleteindex = deleteModal.length;
        deleteIteration < deleteindex;
        deleteIteration++
      ) {
        deleteModal[deleteIteration].addEventListener(
          "click",
          showDeleteModal,
          false
        );
      }
    }

    function initiateButtonControls() {
      const removeData = function() {
        modalContainer.style.display = "none";
        formDeleteModal.style.display = "none";
      };
      const btnDelete = document.querySelectorAll(".btn-delete");

      for (
        let btnDeleteIter = 0, btnDeleteIndex = btnDelete.length;
        btnDeleteIter < btnDeleteIndex;
        btnDeleteIter++
      ) {
        btnDelete[btnDeleteIter].addEventListener("click", removeData, false);
      }
    }
    deleteEntireModal();
    initiateButtonControls();
    trigerModal();
  };

  const initializeGraduateModal = function() {
    const modalGraduatesContainer = document.querySelector("#modal-graduates");
    const viewBtn = document.querySelectorAll(".view-grad");
    const gradModalCloseBtn = document.querySelector("#closebtn-graduates");

    const showGradInfo = () => {
      modalGraduatesContainer.style.display = "block";
    };

    const hideGradInfo = () => {
      modalGraduatesContainer.style.display = "none";
    };
    for (
      let graditer = 0, gradindex = viewBtn.length;
      graditer < gradindex;
      graditer++
    ) {
      viewBtn[graditer].addEventListener("click", showGradInfo, false);
    }

    gradModalCloseBtn.addEventListener("click", hideGradInfo, false);
  };

  if (document.querySelectorAll(".modalcontainer")[0]) {
    initializeAdminModal();
  }
  if (document.querySelector("#modal-graduates")) {
    initializeGraduateModal();
  }
})();

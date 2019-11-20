"use strict";

(() => {
  const initializeAdminModal = () => {
    const modalContainer = document.querySelectorAll(".modalcontainer")[0];
    const formEditModal = document.querySelectorAll(".form-edit-container")[0];
    const formModalContainer = document.querySelectorAll(
      ".formcontainer-modal"
    )[0];
    const formDeleteModal = document.querySelectorAll(
      ".form-delete-container"
    )[0];
    const formTitleEdit = document.querySelectorAll(".formtitle-edit")[0];

    const removeModal = () => {
      modalContainer.style.display = "none";
      formTitleEdit.style.display = "none";
      if (formEditModal.style.display === "block") {
        formEditModal.style.display = "none";
      }
      if (formDeleteModal.style.display === "block") {
        formDeleteModal.style.display = "none";
      }
    };

    const showEditModal = () => {
      modalContainer.style.display = "block";
      formTitleEdit.style.display = "block";
      formEditModal.style.display = "block";
      formModalContainer.style.display = "block";
      formDeleteModal.style.display = "none";
    };

    const showDeleteModal = () => {
      modalContainer.style.display = "block";
      formTitleEdit.style.display = "none";
      formEditModal.style.display = "none";
      formModalContainer.style.display = "none";
      formDeleteModal.style.display = "block";
    };

    const deleteEntireModal = () => {
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
      const removeData = () => {
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

  const initializeGraduateModal = () => {
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

  const initiateJobOfferModal = () => {
    const jobOfferModal = document.querySelector("#modal-joboffer");
    const jobOfferCloseBtn = document.querySelectorAll(".closebtnjoboffer");

    const addnewJobOfferModal = document.querySelectorAll(".jobofferbtn")[0];
    const addnewJobofferForm = document.querySelector("#addnewjoboffer");

    const viewjobOfferModal = document.querySelectorAll(".view-joboffer");
    const viewJobOfferInfo = document.querySelector("#viewjoboffer");

    const editJobOfferModal = document.querySelectorAll(".edit-joboffer");
    const editJobOfferInfo = document.querySelector("#editjoboffer");

    const deleteJobOfferModal = document.querySelectorAll(".delete-joboffer");
    const deleteJobOfferInfo = document.querySelector("#deletejoboffer");

    const addJobOffer = () => {
      jobOfferModal.style.display = "block";
      viewJobOfferInfo.style.display = "none";
      editJobOfferInfo.style.display = "none";
      deleteJobOfferInfo.style.display = "none";
      addnewJobofferForm.style.display = "block";
    };
    const closeJobOfferModal = () => {
      jobOfferModal.style.display = "none";
      addnewJobofferForm.style.display = "none";
      viewJobOfferInfo.style.display = "none";
      editJobOfferInfo.style.display = "none";
      deleteJobOfferInfo.style.display = "none";
    };

    const viewJobOffer = () => {
      jobOfferModal.style.display = "block";
      viewJobOfferInfo.style.display = "block";
      editJobOfferInfo.style.display = "none";
      deleteJobOfferInfo.style.display = "none";
      addnewJobofferForm.style.display = "none";
    };
    const editJobOffer = () => {
      jobOfferModal.style.display = "block";
      viewJobOfferInfo.style.display = "none";
      editJobOfferInfo.style.display = "block";
      deleteJobOfferInfo.style.display = "none";
      addnewJobofferForm.style.display = "none";
    };
    const deleteJobOffer = () => {
      jobOfferModal.style.display = "block";
      viewJobOfferInfo.style.display = "none";
      editJobOfferInfo.style.display = "none";
      deleteJobOfferInfo.style.display = "block";
      addnewJobofferForm.style.display = "none";
    };

    const initializeClickEvent = () => {
      for (let i = 0, index = viewjobOfferModal.length; i < index; i++) {
        viewjobOfferModal[i].addEventListener("click", viewJobOffer, false);
      }

      for (let i = 0, index = editJobOfferModal.length; i < index; i++) {
        editJobOfferModal[i].addEventListener("click", editJobOffer, false);
      }

      for (let i = 0, index = deleteJobOfferModal.length; i < index; i++) {
        deleteJobOfferModal[i].addEventListener("click", deleteJobOffer, false);
      }

      for (let i = 0, index = jobOfferCloseBtn.length; i < index; i++) {
        jobOfferCloseBtn[i].addEventListener(
          "click",
          closeJobOfferModal,
          false
        );
      }
      addnewJobOfferModal.addEventListener("click", addJobOffer, false);
    };
    initializeClickEvent();
  };

  const initiateScholarShipModal = () => {
    const scholarShipModal = document.querySelector("#modal-scholarship");
    const scholarShipCloseBtn = document.querySelectorAll(
      ".closebtnscholarship"
    );

    const addnewscholarShipModal = document.querySelectorAll(
      ".scholarshipbtn"
    )[0];
    const addnewscholarShipForm = document.querySelector("#addnewscholarship");

    const viewscholarShipModal = document.querySelectorAll(".view-scholarship");
    const viewscholarShipInfo = document.querySelector("#viewscholarship");

    const editscholarShipModal = document.querySelectorAll(".edit-scholarship");
    const editscholarShipInfo = document.querySelector("#editscholarship");

    const deletescholarShipModal = document.querySelectorAll(
      ".delete-scholarship"
    );
    const deletescholarShipInfo = document.querySelector("#deletescholarship");

    const addscholarShip = () => {
      scholarShipModal.style.display = "block";
      viewscholarShipInfo.style.display = "none";
      editscholarShipInfo.style.display = "none";
      deletescholarShipInfo.style.display = "none";
      addnewscholarShipForm.style.display = "block";
    };
    const closescholarShipModal = () => {
      scholarShipModal.style.display = "none";
      addnewscholarShipForm.style.display = "none";
      viewscholarShipInfo.style.display = "none";
      editscholarShipInfo.style.display = "none";
      deletescholarShipInfo.style.display = "none";
    };

    const viewscholarShip = () => {
      scholarShipModal.style.display = "block";
      viewscholarShipInfo.style.display = "block";
      editscholarShipInfo.style.display = "none";
      deletescholarShipInfo.style.display = "none";
      addnewscholarShipForm.style.display = "none";
    };
    const editscholarShip = () => {
      scholarShipModal.style.display = "block";
      viewscholarShipInfo.style.display = "none";
      editscholarShipInfo.style.display = "block";
      deletescholarShipInfo.style.display = "none";
      addnewscholarShipForm.style.display = "none";
    };
    const deletescholarShip = () => {
      scholarShipModal.style.display = "block";
      viewscholarShipInfo.style.display = "none";
      editscholarShipInfo.style.display = "none";
      deletescholarShipInfo.style.display = "block";
      addnewscholarShipForm.style.display = "none";
    };

    const initializeClickEvent = () => {
      for (let i = 0, index = viewscholarShipModal.length; i < index; i++) {
        viewscholarShipModal[i].addEventListener(
          "click",
          viewscholarShip,
          false
        );
      }

      for (let i = 0, index = editscholarShipModal.length; i < index; i++) {
        editscholarShipModal[i].addEventListener(
          "click",
          editscholarShip,
          false
        );
      }

      for (let i = 0, index = deletescholarShipModal.length; i < index; i++) {
        deletescholarShipModal[i].addEventListener(
          "click",
          deletescholarShip,
          false
        );
      }

      for (let i = 0, index = scholarShipCloseBtn.length; i < index; i++) {
        scholarShipCloseBtn[i].addEventListener(
          "click",
          closescholarShipModal,
          false
        );
      }
      addnewscholarShipModal.addEventListener("click", addscholarShip, false);
    };
    initializeClickEvent();
  };

  const initiateExaminationModal = () => {
    const examinationModal = document.querySelector("#modal-examination");
    const examinationCloseBtn = document.querySelectorAll(
      ".closebtnexamination"
    );

    const addNewExaminationModal = document.querySelectorAll(
      ".examinationbtn"
    )[0];
    const addNewExaminationForm = document.querySelector("#addnewexamination");

    const viewExaminationModal = document.querySelectorAll(".view-examination");
    const viewExaminationInfo = document.querySelector("#viewexamination");

    const editExaminationModal = document.querySelectorAll(".edit-examination");
    const editExaminationInfo = document.querySelector("#editexamination");

    const deletEexaminationModal = document.querySelectorAll(
      ".delete-examination"
    );
    const deleteExaminationInfo = document.querySelector("#deleteexamination");

    const addExamination = () => {
      examinationModal.style.display = "block";
      viewExaminationInfo.style.display = "none";
      editExaminationInfo.style.display = "none";
      deleteExaminationInfo.style.display = "none";
      addNewExaminationForm.style.display = "block";
    };
    const closeExaminationModal = () => {
      examinationModal.style.display = "none";
      addNewExaminationForm.style.display = "none";
      viewExaminationInfo.style.display = "none";
      editExaminationInfo.style.display = "none";
      deleteExaminationInfo.style.display = "none";
    };

    const viewExamination = () => {
      examinationModal.style.display = "block";
      viewExaminationInfo.style.display = "block";
      editExaminationInfo.style.display = "none";
      deleteExaminationInfo.style.display = "none";
      addNewExaminationForm.style.display = "none";
    };
    const editExamination = () => {
      examinationModal.style.display = "block";
      viewExaminationInfo.style.display = "none";
      editExaminationInfo.style.display = "block";
      deleteExaminationInfo.style.display = "none";
      addNewExaminationForm.style.display = "none";
    };
    const deleteExamination = () => {
      examinationModal.style.display = "block";
      viewExaminationInfo.style.display = "none";
      editExaminationInfo.style.display = "none";
      deleteExaminationInfo.style.display = "block";
      addNewExaminationForm.style.display = "none";
    };

    const initializeClickEvent = () => {
      for (let i = 0, index = viewExaminationModal.length; i < index; i++) {
        viewExaminationModal[i].addEventListener(
          "click",
          viewExamination,
          false
        );
      }

      for (let i = 0, index = editExaminationModal.length; i < index; i++) {
        editExaminationModal[i].addEventListener(
          "click",
          editExamination,
          false
        );
      }

      for (let i = 0, index = deletEexaminationModal.length; i < index; i++) {
        deletEexaminationModal[i].addEventListener(
          "click",
          deleteExamination,
          false
        );
      }

      for (let i = 0, index = examinationCloseBtn.length; i < index; i++) {
        examinationCloseBtn[i].addEventListener(
          "click",
          closeExaminationModal,
          false
        );
      }
      addNewExaminationModal.addEventListener("click", addExamination, false);
    };
    initializeClickEvent();
  };

  const ModalChecker = () => {
    if (document.querySelectorAll(".modalcontainer")[0]) {
      initializeAdminModal();
    }
    if (document.querySelector("#modal-graduates")) {
      initializeGraduateModal();
    }
    if (document.querySelector("#modal-joboffer")) {
      initiateJobOfferModal();
    }

    if (document.querySelector("#modal-scholarship")) {
      initiateScholarShipModal();
    }
    if (document.querySelector("#modal-examination")) {
      initiateExaminationModal();
    }
  };

  ModalChecker();
})();

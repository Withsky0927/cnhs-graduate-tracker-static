(() => {
  const initializeGenSettingFunc = () => {
    const everyBackup = document.querySelectorAll(".everybackup");
    const backupOptionData = document.querySelectorAll(".backupoptiondata");
    backupOptionData[0].setAttribute("checked", "checked");
    const disableEveryBackupOption = () => {
      for (let i = 0, index = everyBackup.length; i < index; i++) {
        everyBackup[i].setAttribute("disabled", "disabled");
      }
    };

    const enableEveryBackupOption = () => {
      for (let i = 0, index = everyBackup.length; i < index; i++) {
        everyBackup[i].removeAttribute("disabled");
        everyBackup[0].setAttribute("checked", "checked");
      }
    };
    const checkAutoBackupChecking = e => {
      e.preventDefault();
      let value = e.target.value;
      if (typeof value !== "number" || !value) {
        if (value === "yes") {
          backupOptionData[0].setAttribute("checked", "checked");
          backupOptionData[1].removeAttribute("checked");
          enableEveryBackupOption();
        } else if (value === "no") {
          backupOptionData[0].removeAttribute("checked");
          backupOptionData[1].setAttribute("checked", "checked");
          disableEveryBackupOption();
        } else {
          console.log("invalid value");
        }
      }
    };
    for (let i = 0, index = backupOptionData.length; i < index; i++) {
      backupOptionData[i].addEventListener(
        "click",
        checkAutoBackupChecking,
        false
      );
    }
  };

  const initializeModuleConfiguration = () => {
    const allModule = document.querySelector("#moduleall");
    const allGraduateModule = document.querySelector("#graduatesall");
    const allModuleCheckbox = document.querySelectorAll(".allcheckbox");
    const allGraduateModuleCheckbox = document.querySelectorAll(
      ".graduatemodulecheck"
    );

    // remove all checkvalue
    const removeCheckModule = () => {
      allModule.removeAttribute("checked");
      for (let i = 0, index = allModuleCheckbox.length; i < index; i++) {
        allModuleCheckbox[i].removeAttribute("checked");
      }
    };

    const setAllModuleToChekedDefault = () => {
      removeCheckModule();
      allModule.setAttribute("checked", true);
      for (let i = 0, index = allModuleCheckbox.length; i < index; i++) {
        allModuleCheckbox[i].setAttribute("checked", "checked");
      }
    };

    const graduateModuleCheck = e => {
      const graduateModuleValue = e.target.value;
      console.log(graduateModuleValue);
      if (graduateModuleValue === "graduateall") {
        removeCheckModule();
        for (
          let i = 0, index = allGraduateModuleCheckbox.length;
          i < index;
          i++
        ) {
          allGraduateModuleCheckbox[i].setAttribute("checked", "checked");
        }
      } else if (graduateModuleValue === "stem") {
        removeCheckModule();
        allGraduateModuleCheckbox[0].removeAttribute("checked");
        allGraduateModuleCheckbox[1].setAttribute("checked", "checked");
      } else if (graduateModuleValue === "abm") {
        removeCheckModule();
        allGraduateModuleCheckbox[0].removeAttribute("checked");
        allGraduateModuleCheckbox[2].setAttribute("checked", "checked");
      } else if (graduateModuleValue === "tvl") {
        removeCheckModule();
        allGraduateModuleCheckbox[0].removeAttribute("checked");
        allGraduateModuleCheckbox[3].setAttribute("checked", "checked");
      } else if (graduateModuleValue == "hummss") {
        removeCheckModule();
        allGraduateModuleCheckbox[0].removeAttribute("checked");
        allGraduateModuleCheckbox[4].setAttribute("checked", "checked");
      } else if (graduateModuleValue === "gas") {
        removeCheckModule();
        allGraduateModuleCheckbox[0].removeAttribute("checked");
        allGraduateModuleCheckbox[5].setAttribute("checked", "checked");
      } else if (graduateModuleValue == "artsscience") {
        removeCheckModule();
        allGraduateModuleCheckbox[0].removeAttribute("checked");
        allGraduateModuleCheckbox[6].setAttribute("checked", "checked");
      }
    };

    for (let i = 0, index = 7; i < index; i++) {
      allModuleCheckbox[i].addEventListener(
        "click",
        graduateModuleCheck,
        false
      );
    }

    // checked all module by default
    setAllModuleToChekedDefault();
    allModule.addEventListener("click", setAllModuleToChekedDefault, false);
  };

  const initializeRestoreForm = () => {
    const restoreModal = document.querySelector("#restore-modal");
    const restoreButton = document.querySelector("#restorebtn");

    const showRestoreModal = () => {
      restoreModal.style.display = "block";
    };

    restoreButton.addEventListener("click", showRestoreModal, false);
  };

  const cancelRestoreModal = () => {
    const cancelRestoreModalButton = document.querySelector("#cancel-restore");
    const restoreModal = document.querySelector("#restore-modal");

    const removeModal = () => {
      restoreModal.style.display = "none";
    };

    cancelRestoreModalButton.addEventListener("click", removeModal, false);
  };

  const showConfirmRestoreModal = () => {
    const confirmRestoreModal = document.querySelector(
      "#confirm-restore-modal"
    );
    const confirmRestoreButton = document.querySelector("#confirm-restore");
    const restoreForm = document.querySelector("#restoreform");
    const btnConfirm = document.querySelectorAll(".btn-confirm");

    const closeConfirmForm = () => {
      const closeConfirm = () => {
        confirmRestoreModal.style.display = "none";
        restoreForm.style.display = "block";
      };

      for (let i = 0, index = btnConfirm.length; i < index; i++) {
        btnConfirm[i].addEventListener("click", closeConfirm, false);
      }
    };

    const showConfirmRestoreModalForm = () => {
      confirmRestoreModal.style.display = "block";
      restoreForm.style.display = "none";
      closeConfirmForm();
    };

    confirmRestoreButton.addEventListener(
      "click",
      showConfirmRestoreModalForm,
      false
    );
  };

  const preventFormDefault = () => {
    const backUpForm = document.querySelector("#backupform");
    const restoreForm = document.querySelector("#preventdefaultrestore");
    const confirmRestorePreventDefault = document.querySelector(
      "#confirmRestorePreventDefault"
    );
    const preventBackupDefault = event => {
      event.preventDefault();
    };
    const preventRestoreDefault = event => {
      event.preventDefault();
    };
    const preventConfirmRestoreDefault = event => {
      event.preventDefault();
    };

    backUpForm.addEventListener("submit", preventBackupDefault, false);
    restoreForm.addEventListener("submit", preventRestoreDefault, false);
    confirmRestorePreventDefault.addEventListener(
      "submit",
      preventConfirmRestoreDefault,
      false
    );
  };

  window.onload = () => {
    preventFormDefault();
    initializeGenSettingFunc();
    initializeModuleConfiguration();
    initializeRestoreForm();
    cancelRestoreModal();
    showConfirmRestoreModal();
  };
})();

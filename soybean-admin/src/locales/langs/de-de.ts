const local: App.I18n.Schema = {
  system: {
    title: 'Rustdesk Api Server',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Später'
  },
  common: {
    action: 'Action',
    add: 'Hinzufügen',
    addSuccess: 'Add Success',
    backToHome: 'Back to home',
    batchDelete: 'Batch Delete',
    cancel: 'Abbrechen',
    close: 'Schließen',
    check: 'Prüfen',
    expandColumn: 'Expand Column',
    columnSetting: 'Column Setting',
    config: 'Config',
    confirm: 'Bestätigen',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    edit: 'Edit',
    look: 'Look',
    warning: 'Warning',
    error: 'Error',
    index: 'Index',
    keywordSearch: 'Please enter keyword',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to log out?',
    lookForward: 'Coming soon',
    modify: 'Modify',
    modifySuccess: 'Modify Success',
    noData: 'No Data',
    operate: 'Operate',
    pleaseCheckValue: 'Please check whether the value is valid',
    refresh: 'Refresh',
    reset: 'Reset',
    search: 'Search',
    switch: 'Switch',
    tip: 'Tip',
    trigger: 'Trigger',
    update: 'Update',
    updateSuccess: 'Update Success',
    userCenter: 'User Center',
    yesOrNo: {
      yes: 'Yes',
      no: 'No'
    }
  },
  request: {
    logout: 'Logout user after request failed',
    logoutMsg: 'User status is invalid, please log in again',
    logoutWithModal: 'Pop up modal after request failed and then log out user',
    logoutWithModalMsg: 'User status is invalid, please log in again',
    refreshToken: 'The requested token has expired, refresh the token',
    tokenExpired: 'The requested token has expired'
  },
  theme: {
    themeSchema: {
      title: 'Theme Schema',
      light: 'Light',
      dark: 'Dark',
      auto: 'Follow System'
    },
    grayscale: 'Grayscale',
    colourWeakness: 'Colour Weakness',
    layoutMode: {
      title: 'Layout Mode',
      vertical: 'Vertical Menu Mode',
      horizontal: 'Horizontal Menu Mode',
      'vertical-mix': 'Vertical Mix Menu Mode',
      'horizontal-mix': 'Horizontal Mix menu Mode',
      reverseHorizontalMix: 'Reverse first level menus and child level menus position'
    },
    recommendColor: 'Apply Recommended Color Algorithm',
    recommendColorDesc: 'The recommended color algorithm refers to',
    themeColor: {
      title: 'Theme Color',
      primary: 'Primary',
      info: 'Info',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      followPrimary: 'Follow Primary'
    },
    scrollMode: {
      title: 'Scroll Mode',
      wrapper: 'Wrapper',
      content: 'Content'
    },
    page: {
      animate: 'Page Animate',
      mode: {
        title: 'Page Animate Mode',
        fade: 'Fade',
        'fade-slide': 'Slide',
        'fade-bottom': 'Fade Zoom',
        'fade-scale': 'Fade Scale',
        'zoom-fade': 'Zoom Fade',
        'zoom-out': 'Zoom Out',
        none: 'None'
      }
    },
    fixedHeaderAndTab: 'Fixed Header And Tab',
    header: {
      height: 'Header Height',
      breadcrumb: {
        visible: 'Breadcrumb Visible',
        showIcon: 'Breadcrumb Icon Visible'
      }
    },
    tab: {
      visible: 'Tab Visible',
      cache: 'Tab Cache',
      height: 'Tab Height',
      mode: {
        title: 'Tab Mode',
        chrome: 'Chrome',
        button: 'Button'
      }
    },
    sider: {
      inverted: 'Dark Sider',
      width: 'Sider Width',
      collapsedWidth: 'Sider Collapsed Width',
      mixWidth: 'Mix Sider Width',
      mixCollapsedWidth: 'Mix Sider Collapse Width',
      mixChildMenuWidth: 'Mix Child Menu Width'
    },
    footer: {
      visible: 'Footer Visible',
      fixed: 'Fixed Footer',
      height: 'Footer Height',
      right: 'Right Footer'
    },
    watermark: {
      visible: 'Watermark Full Screen Visible',
      text: 'Watermark Text'
    },
    themeDrawerTitle: 'Theme Configuration',
    pageFunTitle: 'Page Function',
    configOperation: {
      copyConfig: 'Copy Config',
      copySuccessMsg: 'Copy Success, Please replace the variable "themeSettings" in "src/theme/settings.ts"',
      resetConfig: 'Reset Config',
      resetSuccessMsg: 'Reset Success'
    }
  },
  route: {
    login: 'Login',
    403: 'Keine Rechte',
    404: 'Seite nicht gefunden',
    500: 'Server Error',
    'iframe-page': 'Iframe',
    home: 'Home',
    audit: 'Audit',
    user: 'Benutzerverwaltung',
    user_list: 'Benutzerliste',
    user_sessions: 'Sessions',
    device: 'Geräteverwaltung',
    device_list: 'Geräte',
    system: 'Systemverwaltung',
    system_mail_template: 'Mail Vorlagen',
    system_mail_logs: 'Mail Logs',
    system_mail: 'Mailverwaltung',
    audit_baselogs: 'Base Logs',
    audit_filetransferlogs: 'File Transfer Logs'
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Login / Registrieren',
        userNamePlaceholder: 'Benutzername',
        phonePlaceholder: 'Telefonnummer',
        codePlaceholder: 'Captcha',
        passwordPlaceholder: 'Passwort',
        confirmPasswordPlaceholder: 'Passwort erneut eingeben',
        codeLogin: 'Verification code login',
        confirm: 'Anmelden',
        back: 'Zurück',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Anmeldung erfolgreich',
        welcomeBack: 'Willkommen zurück, {userName} !'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me'
      }
    },
    home: {
      greeting: 'Good morning, {userName}, today is another day full of vitality!',
      friendlySponsorship: 'Friendly sponsorship',
      cupOfCoffee: 'Can you treat me to a cup of coffee?',
      thankYou: 'Thank you for your sponsorship',
      userCount: 'User Count',
      deviceCount: 'Device Count',
      onlineCount: 'Online Count',
      visitsCount: 'Visits Count',
      operatingSystem: 'Operating System',
      oneWeek: 'One Week',
      changeLogs: 'Change Logs'
    },
    device: {
      list: {

      }
    },
    user: {
      list: {
        addUser: 'Benutzer hinzufügen',
        editUser: 'Benutzer bearbeiten',
        inputUsername: 'Input Benutzername',
        inputPassword: 'Input Password',
        inputNickname: 'Input Nickname',
        emailFormatError: 'Email format error',
        selectUserStatus: 'Please select user status',
        searchPlaceholder: 'Username\\Nickname\\Email',
        tfa_secret_bind: '2FA Device Bind',
        require2FASecret: '2FA Secret Empty',
        require2FACode: "2FA Code Can't Empty"
      },
      sessions: {
        kill: 'Kill',
        confirmKill: 'Confirm Kill?'
      },
      audit: {
        logsSearchPlaceholder: 'Username\\Action\\RustdeskID\\IP'
      }
    },
    system: {
      mailTemplate: {
        addMailTemplate: 'Add Template',
        editMailTemplate: 'Edit Template',
        inputName: 'Input Name',
        inputSubject: 'Input Subject',
        inputContents: 'Input Contents',
        selectType: 'Please select type'
      },
      mailLog: {
        info: 'Info'
      }
    }
  },
  dropdown: {
    closeCurrent: 'Close Current',
    closeOther: 'Close Other',
    closeLeft: 'Close Left',
    closeRight: 'Close Right',
    closeAll: 'Close All'
  },
  icon: {
    themeConfig: 'Theme Konfiguration',
    themeSchema: 'Theme Schema',
    lang: 'Sprache ändern',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    reload: 'Reload Page',
    collapse: 'Collapse Menu',
    expand: 'Expand Menu',
    pin: 'Pin',
    unpin: 'Unpin'
  },
  datatable: {
    itemCount: 'Total {total} items'
  },
  dataMap: {
    device: {
      hostname: 'Hostname',
      rustdesk_id: 'Rustdesk ID'
    },
    user: {
      username: 'Benutzername',
      password: 'Passwort',
      name: 'Nickname',
      email: 'Email',
      licensed_devices: 'Licensed Devices',
      login_verify: 'Login Verify',
      status: 'Status',
      is_admin: 'Ist Admin',
      tfa_secret: '2FA Secret',
      tfa_code: '2FA Code',
      created_at: 'erzeugt am',
      statusLabel: {
        disabled: 'Deaktiviert',
        unverified: 'Unverified',
        normal: 'Normal'
      },
      loginVerifyLabel: {
        none: 'None',
        emailCheck: 'Email Check',
        tfaCheck: '2FA'
      }
    },
    session: {
      expired: 'abgelaufen am',
      created_at: 'erzeugt am'
    },
    audit: {
      username: 'Benutzername',
      type: 'Typ',
      conn_id: 'Connect Id',
      rustdesk_id: 'Rustdesk ID',
      ip: 'IP',
      session_id: 'Session Id',
      uuid: 'UUID',
      created_at: 'erzeugt am',
      closed_at: 'geschlossen am',
      typeLabel: {
        remote_control: 'Remote Control',
        file_transfer: 'File Transfer',
        tcp_tunnel: 'TCP Tunnel'
      },
      fileTransferTypeLabel: {
        master_controlled: 'Master -> Controlled',
        controlled_master: 'Controlled -> Master'
      },
      peer_id: 'Peer ID',
      path: 'Path'
    },
    mailTemplate: {
      name: 'Name',
      type: 'Type',
      subject: 'Subject',
      contents: 'Content',
      created_at: 'Created At',
      typeLabel: {
        loginVerify: 'Login Verify',
        registerVerify: 'Register Verify',
        other: 'Other'
      }
    },
    mailLog: {
      username: 'Username',
      uuid: 'UUID',
      from: 'From',
      to: 'To',
      subject: 'Subject',
      contents: 'Content',
      status: 'Status',
      created_at: 'Send Time',
      statusLabel: {
        ok: 'Success',
        err: 'Error'
      }
    }
  },
  api: {
    CaptchaError: 'CAPTCHA error',
    UserNotExists: 'The user does not exist',
    UsernameOrPasswordError: 'Incorrect account or password',
    UserExists: 'The username already used',
    UsernameEmpty: 'User name cannot be empty',
    PasswordEmpty: 'Password cannot be empty',
    UserAddSuccess: 'User created successfully',
    DataError: 'data error',
    UserUpdateSuccess: 'User modified successfully',
    UserDeleteSuccess: 'User deleted successfully',
    SessionKillSuccess: 'Session killed successfully',
    MailTemplateNameEmpty: 'Name cannot be empty',
    MailTemplateSubjectEmpty: 'Subject cannot be empty',
    MailTemplateContentsEmpty: 'Contents cannot be empty',
    MailTemplateAddSuccess: 'Mail template created successfully',
    MailTemplateUpdateSuccess: 'Mail template modified successfully',
    NoEmailAddress: 'No e-mail address set',
    VerificationCodeError: 'Verification Code Error',
    UUIDEmpty: 'UUID cannot be empty'
  }
};

export default local;

interface DefaultSettings {
    title: string;
    showSettings: boolean;
    tagsView: boolean;
    fixedHeader: boolean;
    sidebarLogo: boolean;
    errorLog: string;
    layoutModel:string
  }
  
  const defaultSettings: DefaultSettings = {
    title: 'vue3-element-admin',
    showSettings: true,
    tagsView: true,
    fixedHeader: false,
    // 是否显示Logo
    sidebarLogo: true,
    errorLog: 'production',
    // 布局模式
    layoutModel: 'mixed'
  };
  
  export default defaultSettings;
  
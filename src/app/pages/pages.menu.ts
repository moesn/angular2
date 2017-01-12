export const PAGES_MENU = [
    {
        path: 'work',
        children: [
            {
                path: 'index',
                data: {
                    menu: {
                        title: '首页',
                        icon: 'ion-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'cartoon',
                data: {
                    menu: {
                        title: '动漫',
                        icon: 'ion-ionic',
                        selected: false,
                        expanded: true,
                        order: 100,
                    }
                },
                children: [
                    {
                        path: 'hot',
                        data: {
                            menu: {
                                title: '热门',
                            }
                        }
                    },
                    {
                        path: 'new',
                        data: {
                            menu: {
                                title: '最新',
                            }
                        }
                    },
                    {
                        path: 'over',
                        data: {
                            menu: {
                                title: '完结',
                            }
                        }
                    }
                ]
            }, {
                path: '游戏',
                data: {
                    menu: {
                        title: '项目管理',
                        icon: 'ion-grid',
                        selected: false,
                        expanded: false,
                        order: 200,
                    }
                },
                children: [
                    {
                        path: 'request',
                        data: {
                            menu: {
                                title: '我的申请',
                            }
                        }
                    },
                    {
                        path: 'approve',
                        data: {
                            menu: {
                                title: '我的审批',
                            }
                        }
                    },
                    {
                        path: 'task',
                        data: {
                            menu: {
                                title: '我的任务',
                            }
                        }
                    },
                    {
                        path: 'assign',
                        data: {
                            menu: {
                                title: '我的指派',
                            }
                        }
                    },
                    {
                        path: 'plan',
                        data: {
                            menu: {
                                title: '个人计划',
                            }
                        }
                    }
                ]
            }, {
                path: 'sysconf',
                data: {
                    menu: {
                        title: '电影',
                        icon: 'ion-settings',
                        selected: false,
                        expanded: false,
                        order: 200,
                    }
                },
                children: [
                    {
                        path: 'request',
                        data: {
                            menu: {
                                title: '我的申请',
                            }
                        }
                    },
                    {
                        path: 'approve',
                        data: {
                            menu: {
                                title: '我的审批',
                            }
                        }
                    },
                    {
                        path: 'task',
                        data: {
                            menu: {
                                title: '我的任务',
                            }
                        }
                    },
                    {
                        path: 'assign',
                        data: {
                            menu: {
                                title: '我的指派',
                            }
                        }
                    },
                    {
                        path: 'plan',
                        data: {
                            menu: {
                                title: '个人计划',
                            }
                        }
                    }
                ]
            }
        ]
    }
];

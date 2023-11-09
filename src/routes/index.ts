import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// 懒加载路由
const Task = lazy(()=>import("../pages/task/index"))
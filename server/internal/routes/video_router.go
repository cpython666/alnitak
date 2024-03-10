package routes

import (
	"github.com/gin-gonic/gin"
	"interastral-peace.com/alnitak/internal/api/v1"
	"interastral-peace.com/alnitak/internal/middleware"
)

func CollectVideoRoutes(r *gin.RouterGroup) {
	videoGroup := r.Group("video")

	videoAuth := videoGroup.Group("")
	videoAuth.Use(middleware.Auth())
	{
		// 上传视频信息
		videoAuth.POST("/uploadVideoInfo", api.UploadVideoInfo)
		// 获取上传视频状态信息
		videoAuth.GET("/getVideoStatus", api.GetVideoStatus)
		// 提交审核
		videoAuth.POST("/submitReview", api.SubmitReview)
		// 获取上传的视频
		videoAuth.GET("/getUploadVideo", api.GetUploadVideoList)
	}

	// 获取视频信息
	videoGroup.GET("getVideoById", api.GetVideoById)
	// 获取视频文件
	videoGroup.GET("getVideoFile", api.GetVideoFile)
	// 获取视频切片
	videoGroup.GET("getVideoSlice", api.GetVideoSlice)
	// cdn远程鉴权
	videoGroup.GET("videoRemoteAuth", api.VideoRemoteAuth)
}

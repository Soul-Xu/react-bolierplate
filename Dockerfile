# 多阶段构建
# 第一阶段作为构建器
FROM node:18.13.0-alpine as builder

# 安装必要的软件包
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh

# 切换软件源为华为云
RUN echo 'https://mirrors.huaweicloud.com/alpine/v3.16/main' > /etc/apk/repositories \
    && echo 'https://mirrors.huaweicloud.com/alpine/v3.16/community' >> /etc/apk/repositories \
    && apk update \
    && apk upgrade

# 复制 package.json 和 package-lock.json 文件以安装依赖项
COPY ./package.json ./package-lock.json ./

# 设置工作目录
WORKDIR /emergency-app

# 安装依赖并创建文件夹
RUN yarn

# 复制所有文件到构建器
COPY ./ .

# 构建项目并复制文件
RUN npm run build

# 第二阶段作为运行器
FROM node:18.13.0-alpine

# 设置工作目录
WORKDIR /emergency-app

# 从第一阶段复制构建好的文件
COPY --from=builder /emergency-app .

# 暴露端口
EXPOSE 6500

# 启动应用
CMD ["npm", "start"]

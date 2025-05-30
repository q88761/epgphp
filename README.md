> Language: [English](README.md)   [简体中文](README_zh-CN.md) 

> [!IMPORTANT]  
> The documentation for this project is still under preparation and is not yet complete.
> 
> There is no documentation reference, it is currently under development, the owner is busy with his studies, and it will not be put into development until the end of June 2025.

> [!WARNING]  
> Redis has been added and stability is being **tested**.

[![GitHub License](https://img.shields.io/github/license/mxdabc/epgphp)
](https://www.gnu.org/licenses/gpl-2.0) ![Static Badge](https://img.shields.io/badge/redis-Optional-red) ![GitHub repo size](https://img.shields.io/github/repo-size/mxdabc/epgphp) ![Static Badge](https://img.shields.io/badge/php-%3E%3D7.2-blue) ![GitHub Repo stars](https://img.shields.io/github/stars/mxdabc/epgphp) 

![Intro](https://socialify.git.ci/mxdabc/epgphp/image?description=1&descriptionEditable=PHP%20version%20of%20the%20EPG%20service%2C%20more%20lightweight.&font=Jost&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Auto)

# 📺 Lightweight PHP EPG Service

Welcome to the **Lightweight PHP EPG Service**! 🎉 This project is a simple yet efficient Electronic Program Guide (EPG) service built with PHP. It is particularly suitable for EPG implementation in low-configuration servers, without Docker, and in scenarios requiring high concurrency.

## 🚀 Features

- **Lightweight**: Minimal resource usage, optimized for performance.
- **Easy Setup**: Just a few steps to get started.
- **Flexible**: Easily customizable to suit your needs.
- **No Dependencies**: Pure PHP with no external dependencies.

## 🛠️ Installation (Don't follow this step)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mxdabc/epgphp.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd epgphp
   ```
3. **Run the service(Temporarily)**:
   ```bash
   php -S localhost:8000
   ```
4. **Access the service**:
   Open your browser and go to `http://localhost:8000/manage.php`.

## 📚 Usage

1. **Add your EPG data**: Customize the `manage.php` file with your TV schedule data.
2. **Query the service**: Send HTTP GET requests to fetch EPG information.
3. **Customize**: Modify the code as needed to fit your specific requirements.

## 📦 Example

Here’s a simple example of how to query the service:

```php
http://localhost:8000/index.php?channel=BBC&date=2024-08-14
```

## 👥 Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests.

## 📝 License

Forked from: https://github.com/TakcC/PHP-EPG-Docker-Server

This repository is my own modified version, which is more suitable for use in scenarios without Docker and requiring high concurrency.

This project is licensed under the GPL-2.0 License. See the [LICENSE](LICENSE) file for more details.


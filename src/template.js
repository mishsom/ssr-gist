export default (content) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/assets/styles.css">
    <title>Title</title>
</head>
<body>
<div id="root">${content}</div>
<script src="/assets/bundle.js"></script>
</body>
</html>`;
}

let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  /* set navbar class to mobile one */
  alert("Hey! This website is still under construction. Currently, the experience on mobile devices is mediocre. Please view the website from a desktop or laptop. Thanks!")
} else {
  /* set navbar class to desktop one */
}

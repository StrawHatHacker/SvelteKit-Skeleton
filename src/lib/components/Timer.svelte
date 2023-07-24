<!-- 
    Usage
    
    <script>let timer;</script>
    <button on:click={() => timer.start()}>Start</button>
    <button on:click={() => timer.stop()}>Stop</button>
    <Timer bind:this={timer} />

-->
<script lang="ts">
	let minutes = 0;
	let seconds = 0;
	let timer = null;

	let parsedTime = {
		minutes: '00',
		seconds: '00'
	};

	function parseTime() {
		if (minutes < 10) parsedTime.minutes = '0' + minutes;
		else parsedTime.minutes = '' + minutes;

		if (seconds < 10) parsedTime.seconds = '0' + seconds;
		else parsedTime.seconds = '' + seconds;

		if (seconds === 59) {
			minutes++;
			seconds = -1;
		}
	}

	export function start() {
		timer = setInterval(() => {
			seconds++;
			parseTime();
		}, 1000);
	}

	export function stop() {
		clearInterval(timer);
		minutes = 0;
		seconds = 0;
		parsedTime = {
			minutes: '00',
			seconds: '00'
		};
	}
</script>

<div>{parsedTime.minutes}:{parsedTime.seconds}</div>

<style>
</style>

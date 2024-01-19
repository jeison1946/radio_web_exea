<?php

class getInfo {


  public function getMp3StreamTitle($streamingUrl, $interval, $offset = 0, $headers = true) {
    $needle = 'StreamTitle=';
    $ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36';

    $opts = array('http' => array(
            'method' => 'GET',
            'header' => 'Icy-MetaData: 1',
            'user_agent' => $ua
        )
    );

    if (($headers = get_headers($streamingUrl)))
        foreach ($headers as $h) {
            $currentSection = explode(':', $h);
            if (strpos(strtolower($h), 'icy-metaint') !== false && ($interval = $currentSection[1]))
                break;
        }

		$context = stream_context_create($opts);

		if ($stream = fopen($streamingUrl, 'r', false, $context)) {
			$buffer = stream_get_contents($stream, $interval, $offset);
			fclose($stream);

			if (strpos($buffer, $needle) !== false) {
				$currentSectionTwo = explode($needle, $buffer);
				$title = $currentSectionTwo[1];
				return substr($title, 1, strpos($title, ';') - 2);
			}
			else
				return $this->getMp3StreamTitle($streamingUrl, $interval, $offset + $interval, false);
		}
		else
			throw new Exception("Unable to open stream [{$streamingUrl}]");
}

  public function getTags($url) {
    $header = $this->getMp3StreamTitle($url, 19200);
    return json_encode(explode(" - ", $header));
  }
}

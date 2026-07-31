# 정승한 | IDEA LAB Researcher

IDEA LAB 연구 포트폴리오 사이트입니다. AI 에이전트를 활용한 CFD 워크플로 데모와
스터디 자료를 공개합니다.

## 구성

- `index.html` — 사이트 전체 (스타일·스크립트 인라인, 빌드 불필요)
- `public/idea-lab-logo.png` — 연구실 로고 (투명 배경, 여백 크롭 완료)
- `public/demos/*.mp4` — 연구 데모 영상 3편 (메시 생성 → 형상 확인 → CFD 메시 설정)
- `study/*.pdf` — 스터디 자료 6건 (ANN, PCA & MLE, Chapter 3/4/5/7)

## 로컬에서 보기

`index.html`을 브라우저로 바로 열면 됩니다. 별도 서버나 빌드 과정이 없습니다.

## 배포

GitHub Pages로 배포합니다. 저장소 Settings → Pages에서 Source를 `main` 브랜치의
`/ (root)`로 지정하면 `index.html`이 그대로 서비스됩니다. 루트의 `.nojekyll`은
Jekyll 전처리를 건너뛰게 해서 파일이 있는 그대로 서빙되도록 합니다.

## 색상 팔레트

| 변수 | 값 | 용도 |
| --- | --- | --- |
| `--accent` | `#0f52ba` | 사파이어 — 강조 텍스트, 티커, 배지, 현재 챕터 |
| `--ink` | `#0f213d` | 딥 네이비 — 본문, 데모 패널, footer 배경 |
| `--acid` | `#f0c14b` | 골드 — 포인트 (버튼 화살표, 섹션 라벨) |
| `--ivory` / `--line` | `#fdfbf6` / `#e2dfd6` | 종이 톤 배경과 구분선 |
| `--muted` | `#6b7484` | 보조 텍스트 |

## 참고

이 저장소에는 별개의 Vite/Cloudflare Workers 실험 코드(`app/`, `worker/`, `db/`)가
함께 있습니다. 공개되는 사이트는 루트의 `index.html` 정적 페이지입니다.
